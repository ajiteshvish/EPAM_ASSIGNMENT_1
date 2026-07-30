"use client";

import { useBanking } from "@/features/banking/useBanking";
import { formatCurrency, formatAccountNumber, formatSortCode } from "@/lib/formatters";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function BalanceCard() {
  const { accounts, selectedAccountId, selectAccount, selectedAccount } = useBanking();

  return (
    <Card variant="paper" shadow="lg" className="relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[3px] border-[#0a0a0a] pb-4 mb-6">
        <div>
          <CardDescription>Primary Balance Overview</CardDescription>
          <CardTitle className="text-[28px] sm:text-[36px] text-[#0a0a0a]">
            {selectedAccount ? formatCurrency(selectedAccount.balance) : "£0.00"}
          </CardTitle>
        </div>

        {/* Account Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {accounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => selectAccount(acc.id)}
              className={`px-3 py-1.5 border-[2px] border-[#0a0a0a] font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-all cursor-pointer ${
                acc.id === selectedAccountId
                  ? "bg-[#0a0a0a] text-[#e8ff00] shadow-hard-sm"
                  : "bg-[#f4f1ea] text-[#0a0a0a] hover:bg-[#e8ff00]"
              }`}
            >
              {acc.type}
            </button>
          ))}
        </div>
      </div>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[12px]">
          <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#e8ff00]/20">
            <span className="text-[10px] text-[#0a0a0a]/60 font-bold uppercase tracking-[0.14em] block">
              Account Name
            </span>
            <span className="font-extrabold text-[#0a0a0a] uppercase">{selectedAccount?.name}</span>
          </div>

          <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea]">
            <span className="text-[10px] text-[#0a0a0a]/60 font-bold uppercase tracking-[0.14em] block">
              Account Number
            </span>
            <span className="font-extrabold text-[#0a0a0a] tnum">
              {formatAccountNumber(selectedAccount?.accountNumber)}
            </span>
          </div>

          <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea]">
            <span className="text-[10px] text-[#0a0a0a]/60 font-bold uppercase tracking-[0.14em] block">
              Sort Code
            </span>
            <span className="font-extrabold text-[#0a0a0a] tnum">
              {formatSortCode(selectedAccount?.sortCode)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
