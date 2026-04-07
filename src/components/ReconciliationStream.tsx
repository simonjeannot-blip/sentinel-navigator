import { useState, useEffect, useCallback } from "react";
import { FileText, Eye, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type InvoiceStatus = "intake" | "vision" | "reconciled";

interface Invoice {
  id: string;
  vendor: string;
  amount: number;
  status: InvoiceStatus;
  ref: string;
  reconciled: boolean;
}

const STATUS_CONFIG: Record<InvoiceStatus, { label: string; sublabel: string; color: string; icon: typeof FileText }> = {
  intake: { label: "Intake", sublabel: "Butcher", color: "bg-intake", icon: FileText },
  vision: { label: "Vision", sublabel: "Refinery", color: "bg-vision", icon: Eye },
  reconciled: { label: "Reconciled", sublabel: "Sentinel", color: "bg-reconciled", icon: ShieldCheck },
};

interface LedgerRow {
  id: string;
  supplier_name: string;
  gross_amount: number;
  reconciled: boolean;
  created_at: string;
}

const mapRow = (row: LedgerRow): Invoice => ({
  id: row.id,
  vendor: row.supplier_name ?? "Unknown",
  amount: row.gross_amount ?? 0,
  status: row.reconciled ? "reconciled" : "vision",
  ref: row.id.slice(0, 8).toUpperCase(),
  reconciled: !!row.reconciled,
});

interface ReconciliationStreamProps {
  onDataLoaded?: (invoices: Invoice[]) => void;
}

const ReconciliationStream = ({ onDataLoaded }: ReconciliationStreamProps) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [flashId, setFlashId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const updateAndNotify = useCallback((updater: (prev: Invoice[]) => Invoice[]) => {
    setInvoices((prev) => {
      const next = updater(prev);
      onDataLoaded?.(next);
      return next;
    });
  }, [onDataLoaded]);

  const fetchInvoices = useCallback(async () => {
    const { data, error } = await supabase
      .from("financial_ledger")
      .select("id, supplier_name, gross_amount, reconciled, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch financial_ledger:", error.message);
    } else if (data) {
      const mapped = (data as LedgerRow[]).map(mapRow);
      setInvoices(mapped);
      onDataLoaded?.(mapped);
    }
    setLoading(false);
  }, [onDataLoaded]);

  useEffect(() => {
    fetchInvoices();

    const channel = supabase
      .channel("financial_ledger_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "financial_ledger" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const newInvoice = mapRow(payload.new as LedgerRow);
            setFlashId(newInvoice.id);
            setTimeout(() => setFlashId(null), 1200);
            updateAndNotify((prev) => [newInvoice, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            const updated = mapRow(payload.new as LedgerRow);
            setFlashId(updated.id);
            setTimeout(() => setFlashId(null), 1200);
            updateAndNotify((prev) =>
              prev.map((i) => (i.id === updated.id ? updated : i))
            );
          } else if (payload.eventType === "DELETE" && payload.old) {
            updateAndNotify((prev) =>
              prev.filter((i) => i.id !== (payload.old as LedgerRow).id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchInvoices, updateAndNotify]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Reconciliation Stream
        </h2>
        <span className="text-xs text-muted-foreground tabular-nums">
          {invoices.filter((i) => i.status === "reconciled").length}/{invoices.length} matched
        </span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <span className="text-sm text-muted-foreground animate-pulse">Connecting to ledger…</span>
        </div>
      ) : invoices.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <span className="text-sm text-muted-foreground">No entries in the ledger.</span>
        </div>
      ) : (
        <div className="flex flex-col gap-px">
          {invoices.map((invoice, idx) => {
            const config = STATUS_CONFIG[invoice.status];
            const Icon = config.icon;
            const isFlashing = flashId === invoice.id;
            return (
              <div
                key={invoice.id}
                className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all duration-300 ${
                  isFlashing ? "animate-match-flash" : ""
                } hover:bg-accent/50`}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex flex-col items-center gap-1 w-16 shrink-0">
                  <div className={`w-2 h-2 rounded-full ${config.color} ${invoice.status === "reconciled" ? "animate-pulse-glow" : ""}`} />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{config.sublabel}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold truncate" style={{ color: "hsl(var(--text-primary))" }}>
                      {invoice.vendor}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">{invoice.ref}</span>
                  </div>
                </div>

                <span className="text-sm font-bold tabular-nums shrink-0" style={{ color: "hsl(var(--text-primary))" }}>
                  ${invoice.amount.toLocaleString()}
                </span>

                <Icon className="w-4 h-4 shrink-0" style={{ color: `hsl(var(--${invoice.status === "intake" ? "intake" : invoice.status === "vision" ? "vision" : "reconciled"}))` }} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReconciliationStream;
