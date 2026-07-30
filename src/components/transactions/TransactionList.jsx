import React from "react";
import { TransactionRow, TransactionCard } from "./TransactionRow";
import { EmptyState } from "@/components/ui/EmptyState";

export function TransactionList({ transactions = [] }) {
  if (transactions.length === 0) {
    return (
      <EmptyState
        icon="🔍"
        title="NO TRANSACTIONS FOUND"
        description="No transaction records match your search or filter parameters."
      />
    );
  }

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block border-[4px] border-[#0a0a0a] bg-[#f4f1ea] shadow-hard-lg overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#0a0a0a] text-[#f4f1ea] font-mono text-[12px] font-extrabold uppercase tracking-[0.16em]">
              <th className="px-5 py-4 border-r-[3px] border-[#f4f1ea]/20">Transaction</th>
              <th className="px-5 py-4 border-r-[3px] border-[#f4f1ea]/20">Category</th>
              <th className="px-5 py-4 border-r-[3px] border-[#f4f1ea]/20">Date</th>
              <th className="px-5 py-4 border-r-[3px] border-[#f4f1ea]/20">Status</th>
              <th className="px-5 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <TransactionRow key={tx.id} transaction={tx} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden space-y-3">
        {transactions.map((tx) => (
          <TransactionCard key={tx.id} transaction={tx} />
        ))}
      </div>
    </div>
  );
}
