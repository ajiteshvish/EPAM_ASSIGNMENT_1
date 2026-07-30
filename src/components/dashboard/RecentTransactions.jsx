"use client";

import Link from "next/link";
import { useBanking } from "@/features/banking/useBanking";
import { formatCurrency, formatTransactionDate } from "@/lib/formatters";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function RecentTransactions() {
  const { transactions } = useBanking();
  const recent = transactions.slice(0, 5);

  return (
    <Card variant="paper" shadow="hard" className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest 5 transactions</CardDescription>
          </div>
          <Link
            href="/transactions"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a0a0a] hover:bg-[#e8ff00] px-2 py-1 border-[2px] border-[#0a0a0a] transition-all"
          >
            View All -&gt;
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 font-mono">
          {recent.map((tx) => {
            const isCredit = tx.type === "credit";
            return (
              <div
                key={tx.id}
                className="border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea] hover:bg-[#e8ff00]/20 transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-9 w-9 border-[2px] border-[#0a0a0a] flex items-center justify-center font-extrabold text-[14px] ${
                      isCredit ? "bg-[#e8ff00]" : "bg-[#0a0a0a] text-[#f4f1ea]"
                    }`}
                  >
                    {isCredit ? "↓" : "↑"}
                  </div>
                  <div>
                    <div className="font-extrabold text-[12px] uppercase text-[#0a0a0a]">{tx.title}</div>
                    <div className="text-[10px] text-[#0a0a0a]/60 font-bold uppercase tracking-[0.1em]">
                      {tx.category} • {formatTransactionDate(tx.date)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={tx.status === "completed" ? "success" : "pending"} size="sm">
                    {tx.status}
                  </Badge>
                  <span
                    className={`font-extrabold text-[13px] tnum ${
                      isCredit ? "text-emerald-700" : "text-[#0a0a0a]"
                    }`}
                  >
                    {isCredit ? "+" : "-"}{formatCurrency(tx.amount)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
