"use client";

import { monthlyCashflowData } from "@/data/spending";
import { formatCurrency } from "@/lib/formatters";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function SpendingOverview() {
  const maxVal = Math.max(...monthlyCashflowData.map((d) => Math.max(d.income, d.expense))) || 5000;

  return (
    <Card variant="paper" shadow="hard" className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Cash Flow Overview</CardTitle>
            <CardDescription>Income vs Expenses (Last 6 Months)</CardDescription>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.12em]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 border-[1.5px] border-[#0a0a0a] bg-[#e8ff00] inline-block" />
              Income
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 border-[1.5px] border-[#0a0a0a] bg-[#0a0a0a] inline-block" />
              Expense
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-48 pt-6 pb-2 flex items-end justify-between gap-2 sm:gap-4 border-b-[3px] border-[#0a0a0a]">
          {monthlyCashflowData.map((item) => {
            const incomeHeight = (item.income / maxVal) * 100;
            const expenseHeight = (item.expense / maxVal) * 100;

            return (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  {/* Income Bar */}
                  <div
                    style={{ height: `${incomeHeight}%` }}
                    className="w-1/2 max-w-[24px] border-[2px] border-[#0a0a0a] bg-[#e8ff00] transition-all hover:opacity-90 relative group"
                    title={`Income: ${formatCurrency(item.income)}`}
                  />

                  {/* Expense Bar */}
                  <div
                    style={{ height: `${expenseHeight}%` }}
                    className="w-1/2 max-w-[24px] border-[2px] border-[#0a0a0a] bg-[#0a0a0a] transition-all hover:opacity-90 relative group"
                    title={`Expense: ${formatCurrency(item.expense)}`}
                  />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase text-[#0a0a0a]/70 tracking-[0.1em]">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
