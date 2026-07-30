import { SpendingOverview } from "@/components/dashboard/SpendingOverview";
import { SpendingCategories } from "@/components/dashboard/SpendingCategories";
import { FinancialInsight } from "@/components/dashboard/FinancialInsight";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 font-mono">
      <div className="border-b-[3px] border-[#0a0a0a] pb-4">
        <h2 className="font-grotesk font-black text-[24px] uppercase text-[#0a0a0a]">
          Financial Analytics &amp; Insights
        </h2>
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#0a0a0a]/60 mt-0.5">
          Real-time income vs expense breakdowns and category metrics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <SpendingOverview />
          <FinancialInsight />
        </div>
        <div>
          <SpendingCategories />
        </div>
      </div>
    </div>
  );
}
