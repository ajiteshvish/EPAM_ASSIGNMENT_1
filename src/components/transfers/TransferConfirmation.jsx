import React from "react";
import { formatCurrency } from "@/lib/formatters";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function TransferConfirmation({ isOpen, onClose, onConfirm, details, loading }) {
  if (!details) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="CONFIRM UK BANK TRANSFER">
      <div className="space-y-4 font-mono text-[12px]">
        <div className="border-[3px] border-[#0a0a0a] bg-[#e8ff00] p-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#0a0a0a]/70 block font-bold">
            Transfer Amount
          </span>
          <span className="font-grotesk font-black text-[36px] text-[#0a0a0a] tnum">
            {formatCurrency(details.amount)}
          </span>
        </div>

        <div className="space-y-2 border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea]">
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Recipient</span>
            <span className="font-extrabold uppercase">{details.recipientName}</span>
          </div>
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Account Number</span>
            <span className="font-extrabold tnum">{details.accountNumber}</span>
          </div>
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-1">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Sort Code</span>
            <span className="font-extrabold tnum">{details.sortCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Payment Reference</span>
            <span className="font-extrabold uppercase">{details.reference || "NEXA-PAYMENT"}</span>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="ghost" onClick={onClose} disabled={loading}>
            Back
          </Button>
          <Button variant="primary" onClick={onConfirm} loading={loading}>
            Authorize Transfer -&gt;
          </Button>
        </div>
      </div>
    </Modal>
  );
}
