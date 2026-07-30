import React from "react";
import { formatCurrency } from "@/lib/formatters";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export function TransferSuccess({ isOpen, onClose, details }) {
  if (!details) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="TRANSFER SENT SUCCESSFULLY">
      <div className="space-y-4 font-mono text-[12px] text-center">
        <div className="text-[48px] my-2">🎉</div>
        <h3 className="font-grotesk font-black text-[22px] uppercase text-[#0a0a0a]">
          {formatCurrency(details.amount)} SENT
        </h3>
        <p className="text-[11px] text-[#0a0a0a]/70 uppercase tracking-[0.12em]">
          Funds have been transferred to <strong className="text-[#0a0a0a]">{details.recipientName}</strong> via UK Faster Payments.
        </p>

        <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#e8ff00] text-left space-y-1">
          <div className="text-[10px] text-[#0a0a0a]/70 uppercase font-bold">Transaction Reference</div>
          <div className="font-extrabold text-[12px] uppercase tnum">{details.reference || "NEXA-PAYMENT-OK"}</div>
        </div>

        <div className="pt-2 flex justify-center">
          <Button variant="primary" onClick={onClose}>
            Done / Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
