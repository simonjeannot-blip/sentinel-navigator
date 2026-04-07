import { useState, useCallback } from "react";
import SafeToInvestGauge from "@/components/SafeToInvestGauge";
import ReconciliationStream from "@/components/ReconciliationStream";
import BookEntryModal from "@/components/BookEntryModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface InvoiceData {
  amount: number;
  reconciled: boolean;
}

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [gaugeData, setGaugeData] = useState({
    revenue: 0,
    payments: 0,
    operations: 0,
    vendor: 0,
    debt: 0,
    allocations: 0,
  });

  const handleDataLoaded = useCallback((invoices: InvoiceData[]) => {
    const totalRevenue = invoices
      .filter((i) => i.reconciled)
      .reduce((sum, i) => sum + i.amount, 0);

    const floatingDebt = invoices
      .filter((i) => !i.reconciled)
      .reduce((sum, i) => sum + i.amount, 0);

    const operationsCost = Math.round(floatingDebt * 0.6);
    const vendorCost = Math.round(floatingDebt * 0.4);

    setGaugeData({
      revenue: totalRevenue,
      payments: 0,
      operations: operationsCost,
      vendor: vendorCost,
      debt: 0,
      allocations: 0,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-8 py-6 border-b border-border/50">
        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-black uppercase tracking-widest text-foreground">Navigator</h1>
          <span className="text-xs font-medium text-muted-foreground tracking-wider">Financial OS</span>
        </div>
        <Button variant="clinical" size="lg" onClick={() => setModalOpen(true)}>
          <Plus className="w-4 h-4" />
          Book Entry
        </Button>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <section className="lg:col-span-2 flex justify-center animate-fade-in-up">
          <SafeToInvestGauge {...gaugeData} />
        </section>

        <section className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <ReconciliationStream onDataLoaded={handleDataLoaded} />
        </section>
      </main>

      <BookEntryModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
