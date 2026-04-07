import React, { useMemo, forwardRef } from "react";

interface GaugeProps {
  revenue: number;
  payments: number;
  operations: number;
  vendor: number;
  debt: number;
  allocations: number;
}

const SafeToInvestGauge = forwardRef<HTMLDivElement, GaugeProps>(({ revenue, payments, operations, vendor, debt, allocations }, ref) => {
  const safeToInvest = useMemo(
    () => (revenue - payments) - (operations + vendor + debt + allocations),
    [revenue, payments, operations, vendor, debt, allocations]
  );

  const maxValue = revenue;
  const percentage = maxValue > 0 ? Math.max(0, Math.min(100, (safeToInvest / maxValue) * 100)) : 0;
  const isHealthy = safeToInvest > 0;

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75;
  const filledLength = arcLength * (percentage / 100);
  const rotation = 135;

  return (
    <div ref={ref} className="flex flex-col items-center gap-6">
      <div className="relative w-52 h-52">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-[0deg]">
          <circle
            cx="100" cy="100" r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="6"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 100)`}
          />
          <circle
            cx="100" cy="100" r={radius}
            fill="none"
            stroke={isHealthy ? "hsl(var(--signal))" : "hsl(var(--destructive))"}
            strokeWidth="6"
            strokeDasharray={`${filledLength} ${circumference}`}
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 100)`}
            className="animate-gauge-fill transition-all duration-1000"
            style={{
              filter: isHealthy ? "drop-shadow(0 0 8px hsl(152 100% 40% / 0.4))" : "none",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-black tracking-tight ${isHealthy ? "text-gradient-signal" : "text-destructive"}`}>
            ${Math.abs(safeToInvest).toLocaleString()}
          </span>
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mt-1">
            Safe to Invest
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-xs">
        <FormulaItem label="Revenue" value={revenue} positive />
        <FormulaItem label="Payments" value={payments} />
        <FormulaItem label="Operations" value={operations} />
        <FormulaItem label="Vendor" value={vendor} />
        <FormulaItem label="Debt" value={debt} />
        <FormulaItem label="Allocations" value={allocations} />
      </div>
    </div>
  );
});

SafeToInvestGauge.displayName = "SafeToInvestGauge";

const FormulaItem = ({ label, value, positive }: { label: string; value: number; positive?: boolean }) => (
  <div className="flex flex-col items-center gap-0.5">
    <span className="text-muted-foreground uppercase tracking-wider text-[10px]">{label}</span>
    <span className={`font-semibold tabular-nums ${positive ? "text-signal" : "text-foreground"}`}>
      ${value.toLocaleString()}
    </span>
  </div>
);

export default SafeToInvestGauge;
