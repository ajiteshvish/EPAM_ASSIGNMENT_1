import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { SpendingOverview } from "@/components/dashboard/SpendingOverview";
import { SpendingCategories } from "@/components/dashboard/SpendingCategories";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { BankCardPreview } from "@/components/dashboard/BankCardPreview";
import { FinancialInsight } from "@/components/dashboard/FinancialInsight";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Top Section */}
      <BalanceCard />

      {/* Quick Actions Bar */}
      <QuickActions />

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <SpendingOverview />
        </div>
        <div className="space-y-6">
          <BankCardPreview />
          <FinancialInsight />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <SpendingCategories />
        </div>
      </div>
    </div>
  );
}
