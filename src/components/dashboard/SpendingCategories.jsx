"use client";

import { useBanking } from "@/features/banking/useBanking";
import { calculateCategoryTotals } from "@/lib/transactionHelpers";
import { formatCurrency } from "@/lib/formatters";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function SpendingCategories() {
  const { transactions } = useBanking();
  const categories = calculateCategoryTotals(transactions);

  return (
    <Card variant="paper" shadow="hard" className="w-full">
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
        <CardDescription>Monthly expense distribution</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {categories.length === 0 ? (
          <p className="font-mono text-[11px] text-[#0a0a0a]/60 uppercase">No expenses recorded this month.</p>
        ) : (
          categories.slice(0, 5).map((cat) => (
            <div key={cat.name} className="font-mono space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.1em]">
                <span>{cat.name}</span>
                <span className="tnum">{formatCurrency(cat.amount)} ({cat.percentage}%)</span>
              </div>
              <div className="h-3 w-full border-[2px] border-[#0a0a0a] bg-[#f4f1ea] overflow-hidden">
                <div
                  style={{ width: `${cat.percentage}%` }}
                  className="h-full bg-[#e8ff00] border-r-[2px] border-[#0a0a0a]"
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
