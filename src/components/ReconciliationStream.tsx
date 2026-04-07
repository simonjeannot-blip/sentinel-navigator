import { useState, useEffect } from "react";
import { FileText, Eye, ShieldCheck } from "lucide-react";

type InvoiceStatus = "intake" | "vision" | "reconciled";

interface Invoice {
  id: string;
  vendor: string;
  amount: number;
  status: InvoiceStatus;
  ref: string;
  matchedAt?: number;
}

const STATUS_CONFIG: Record<InvoiceStatus, { label: string; sublabel: string; color: string; icon: typeof FileText }> = {
  intake: { label: "Intake", sublabel: "Butcher", color: "bg-intake", icon: FileText },
  vision: { label: "Vision", sublabel: "Refinery", color: "bg-vision", icon: Eye },
  reconciled: { label: "Reconciled", sublabel: "Sentinel", color: "bg-reconciled", icon: ShieldCheck },
};

const MOCK_INVOICES: Invoice[] = [
  { id: "1", vendor: "Atlas Freight Co.", amount: 14250, status: "reconciled", ref: "INV-4821", matchedAt: Date.now() - 120000 },
  { id: "2", vendor: "Meridian Supply", amount: 8730, status: "vision", ref: "INV-4819" },
  { id: "3", vendor: "Ironclad Logistics", amount: 22100, status: "intake", ref: "INV-4817" },
  { id: "4", vendor: "Northline Capital", amount: 5400, status: "reconciled", ref: "INV-4815", matchedAt: Date.now() - 60000 },
  { id: "5", vendor: "Vertex Materials", amount: 31050, status: "vision", ref: "INV-4812" },
  { id: "6", vendor: "Summit Holdings", amount: 9800, status: "intake", ref: "INV-4810" },
];

const ReconciliationStream = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(MOCK_INVOICES);
  const [flashId, setFlashId] = useState<string | null>(null);

  // Simulate a match event every 8s for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setInvoices((prev) => {
        const pending = prev.filter((i) => i.status !== "reconciled");
        if (pending.length === 0) return prev;
        const target = pending[0];
        const nextStatus: InvoiceStatus = target.status === "intake" ? "vision" : "reconciled";
        setFlashId(target.id);
        setTimeout(() => setFlashId(null), 1200);
        return prev.map((i) =>
          i.id === target.id ? { ...i, status: nextStatus, ...(nextStatus === "reconciled" ? { matchedAt: Date.now() } : {}) } : i
        );
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
              {/* Status pip */}
              <div className="flex flex-col items-center gap-1 w-16 shrink-0">
                <div className={`w-2 h-2 rounded-full ${config.color} ${invoice.status === "reconciled" ? "animate-pulse-glow" : ""}`} />
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{config.sublabel}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold truncate" style={{ color: "hsl(var(--text-primary))" }}>
                    {invoice.vendor}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">{invoice.ref}</span>
                </div>
              </div>

              {/* Amount */}
              <span className="text-sm font-bold tabular-nums shrink-0" style={{ color: "hsl(var(--text-primary))" }}>
                ${invoice.amount.toLocaleString()}
              </span>

              {/* Status icon */}
              <Icon className="w-4 h-4 shrink-0" style={{ color: `hsl(var(--${invoice.status === "intake" ? "intake" : invoice.status === "vision" ? "vision" : "reconciled"}))` }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReconciliationStream;
