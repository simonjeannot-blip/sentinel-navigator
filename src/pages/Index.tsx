import SafeToInvestGauge from "@/components/SafeToInvestGauge";
import ReconciliationStream from "@/components/ReconciliationStream";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-border/50">
        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-black uppercase tracking-widest text-foreground">Navigator</h1>
          <span className="text-xs font-medium text-muted-foreground tracking-wider">Financial OS</span>
        </div>
        <Button variant="clinical" size="lg">
          <Plus className="w-4 h-4" />
          Book Entry
        </Button>
      </header>

      {/* Main grid */}
      <main className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Gauge — left 2 cols */}
        <section className="lg:col-span-2 flex justify-center animate-fade-in-up">
          <SafeToInvestGauge
            revenue={142500}
            payments={38200}
            operations={22400}
            vendor={14250}
            debt={8730}
            allocations={12600}
          />
        </section>

        {/* Stream — right 3 cols */}
        <section className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <ReconciliationStream />
        </section>
      </main>
    </div>
  );
};

export default Index;
