"use client";

import { useState } from "react";
import { formatCurrency, formatTransactionDate } from "@/lib/formatters";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";

export function TransactionRow({ transaction }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const isCredit = transaction.type === "credit";

  return (
    <>
      <tr
        onClick={() => setDetailOpen(true)}
        className="cell-hover border-t-[3px] border-[#0a0a0a] transition-colors cursor-pointer font-mono text-[13px]"
      >
        <td className="px-5 py-4 border-r-[3px] border-[#0a0a0a] font-extrabold text-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <span
              className={`h-7 w-7 border-[2px] border-[#0a0a0a] flex items-center justify-center font-bold text-[12px] ${
                isCredit ? "bg-[#e8ff00]" : "bg-[#0a0a0a] text-[#f4f1ea]"
              }`}
            >
              {isCredit ? "↓" : "↑"}
            </span>
            <div>
              <div className="uppercase font-bold">{transaction.title}</div>
              <div className="text-[10px] text-[#0a0a0a]/60 uppercase font-medium">{transaction.recipient}</div>
            </div>
          </div>
        </td>

        <td className="px-5 py-4 border-r-[3px] border-[#0a0a0a]">
          <span className="border-[1.5px] border-[#0a0a0a] bg-[#f4f1ea] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]">
            {transaction.category}
          </span>
        </td>

        <td className="px-5 py-4 border-r-[3px] border-[#0a0a0a] tnum text-[#0a0a0a]/80">
          {formatTransactionDate(transaction.date)}
        </td>

        <td className="px-5 py-4 border-r-[3px] border-[#0a0a0a]">
          <Badge variant={transaction.status === "completed" ? "success" : "pending"} size="sm">
            {transaction.status}
          </Badge>
        </td>

        <td
          className={`px-5 py-4 text-right font-extrabold tnum text-[14px] ${
            isCredit ? "text-emerald-700" : "text-[#0a0a0a]"
          }`}
        >
          {isCredit ? "+" : "-"}{formatCurrency(transaction.amount)}
        </td>
      </tr>

      {/* Transaction Detail Modal */}
      <Modal isOpen={detailOpen} onClose={() => setDetailOpen(false)} title="TRANSACTION AUDIT RECEIPT">
        <div className="space-y-4 font-mono text-[12px]">
          <div className="border-[3px] border-[#0a0a0a] bg-[#e8ff00] p-4 text-center">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#0a0a0a]/70 block font-bold">
              Transaction Amount
            </span>
            <span className="font-grotesk font-black text-[32px] text-[#0a0a0a] tnum">
              {isCredit ? "+" : "-"}{formatCurrency(transaction.amount)}
            </span>
          </div>

          <div className="space-y-2 border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea]">
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Title</span>
              <span className="font-extrabold uppercase">{transaction.title}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Recipient / Merchant</span>
              <span className="font-extrabold uppercase">{transaction.recipient || "N/A"}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Category</span>
              <span className="font-extrabold uppercase">{transaction.category}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Timestamp</span>
              <span className="font-extrabold tnum">{formatTransactionDate(transaction.date)}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Status</span>
              <span className="font-extrabold uppercase">{transaction.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Audit Reference</span>
              <span className="font-extrabold text-[#0a0a0a] tnum">{transaction.reference || "REF-9901"}</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function TransactionCard({ transaction }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const isCredit = transaction.type === "credit";

  return (
    <>
      <div
        onClick={() => setDetailOpen(true)}
        className="border-[3px] border-[#0a0a0a] p-4 bg-[#f4f1ea] hover:bg-[#e8ff00]/20 transition-all font-mono space-y-2 cursor-pointer shadow-hard-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-6 w-6 border-[1.5px] border-[#0a0a0a] flex items-center justify-center font-bold text-[11px] ${
                isCredit ? "bg-[#e8ff00]" : "bg-[#0a0a0a] text-[#f4f1ea]"
              }`}
            >
              {isCredit ? "↓" : "↑"}
            </span>
            <span className="font-extrabold text-[13px] uppercase text-[#0a0a0a]">
              {transaction.title}
            </span>
          </div>

          <span
            className={`font-extrabold text-[14px] tnum ${
              isCredit ? "text-emerald-700" : "text-[#0a0a0a]"
            }`}
          >
            {isCredit ? "+" : "-"}{formatCurrency(transaction.amount)}
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#0a0a0a]/70 font-bold uppercase tracking-[0.1em]">
          <span>{transaction.category} • {formatTransactionDate(transaction.date)}</span>
          <Badge variant={transaction.status === "completed" ? "success" : "pending"} size="sm">
            {transaction.status}
          </Badge>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={detailOpen} onClose={() => setDetailOpen(false)} title="TRANSACTION AUDIT RECEIPT">
        <div className="space-y-4 font-mono text-[12px]">
          <div className="border-[3px] border-[#0a0a0a] bg-[#e8ff00] p-4 text-center">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#0a0a0a]/70 block font-bold">
              Transaction Amount
            </span>
            <span className="font-grotesk font-black text-[32px] text-[#0a0a0a] tnum">
              {isCredit ? "+" : "-"}{formatCurrency(transaction.amount)}
            </span>
          </div>

          <div className="space-y-2 border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea]">
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Title</span>
              <span className="font-extrabold uppercase">{transaction.title}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Recipient / Merchant</span>
              <span className="font-extrabold uppercase">{transaction.recipient || "N/A"}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Category</span>
              <span className="font-extrabold uppercase">{transaction.category}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Timestamp</span>
              <span className="font-extrabold tnum">{formatTransactionDate(transaction.date)}</span>
            </div>
            <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Status</span>
              <span className="font-extrabold uppercase">{transaction.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0a0a0a]/60 uppercase font-bold">Audit Reference</span>
              <span className="font-extrabold text-[#0a0a0a] tnum">{transaction.reference || "REF-9901"}</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
