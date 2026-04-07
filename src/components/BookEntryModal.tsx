import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface BookEntryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookEntryModal = ({ open, onOpenChange }: BookEntryModalProps) => {
  const [supplierName, setSupplierName] = useState("");
  const [grossAmount, setGrossAmount] = useState("");
  const [reconciled, setReconciled] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = supplierName.trim();
    if (!trimmedName || trimmedName.length > 200) {
      toast.error("Supplier name is required (max 200 chars).");
      return;
    }

    const amount = parseFloat(grossAmount);
    if (isNaN(amount) || amount < 0 || amount > 999999999) {
      toast.error("Enter a valid gross amount.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("financial_ledger").insert([
      {
        supplier_name: trimmedName,
        gross_amount: amount,
        reconciled,
        transaction_date: new Date().toISOString().split("T")[0],
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.error("Insert failed:", error.message);
      toast.error("Failed to record entry.");
      return;
    }

    toast.success("Entry Recorded in Ledger");
    setSupplierName("");
    setGrossAmount("");
    setReconciled(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="border-border/50 sm:max-w-md"
        style={{ backgroundColor: "hsl(0 0% 10%)" }}
      >
        <DialogHeader>
          <DialogTitle className="text-sm font-black uppercase tracking-widest text-foreground">
            Book Entry
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Record a new transaction in the financial ledger.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="supplier" className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Supplier Name
            </Label>
            <Input
              id="supplier"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              placeholder="e.g. C CARNEVALE LTD"
              maxLength={200}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-signal"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="amount" className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Gross Amount (£)
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              value={grossAmount}
              onChange={(e) => setGrossAmount(e.target.value)}
              placeholder="0.00"
              className="bg-secondary border-border/50 text-foreground tabular-nums placeholder:text-muted-foreground focus:ring-signal"
              required
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <Label htmlFor="reconciled" className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Reconciled
            </Label>
            <Switch
              id="reconciled"
              checked={reconciled}
              onCheckedChange={setReconciled}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full font-bold uppercase tracking-widest text-xs"
            style={{
              backgroundColor: "hsl(152 100% 40%)",
              color: "hsl(0 0% 5%)",
            }}
          >
            {submitting ? "Recording…" : "Submit to Ledger"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookEntryModal;
