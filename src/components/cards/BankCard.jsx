"use client";

import { useState } from "react";
import { useBanking } from "@/features/banking/useBanking";
import { Button } from "@/components/ui/Button";

export function BankCard() {
  const { customer, cardSettings, toggleCardFreeze, addToast } = useBanking();
  const [showDetails, setShowDetails] = useState(false);

  const fullCardNumber = "4410 8891 2234 8842";
  const maskedCardNumber = "•••• •••• •••• 8842";

  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText("4410889122348842");
    addToast("Card number copied to clipboard!");
  };

  return (
    <div className="space-y-4 font-mono">
      <div className="relative border-[4px] border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f1ea] p-6 sm:p-8 shadow-hard-lg flex flex-col justify-between min-h-[220px] select-none overflow-hidden">
        {/* Grid texture overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e8ff00_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Freeze overlay */}
        {cardSettings.frozen && (
          <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-xs z-20 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-[36px] mb-2">❄️</span>
            <h3 className="font-grotesk font-black text-[#e8ff00] text-[22px] uppercase">
              CARD IS FROZEN
            </h3>
            <p className="text-[11px] text-[#f4f1ea]/70 uppercase tracking-[0.14em] mt-1 mb-4">
              All ATM, online, and contactless payments blocked
            </p>
            <Button variant="acid" size="sm" onClick={toggleCardFreeze}>
              Unfreeze Card Now
            </Button>
          </div>
        )}

        <div className="flex items-center justify-between z-10">
          <div>
            <span className="font-grotesk font-black text-[20px] text-[#e8ff00] uppercase tracking-tight block">
              NEXA BLACK
            </span>
            <span className="text-[9px] text-[#f4f1ea]/60 font-bold uppercase tracking-[0.18em]">
              PREMIUM DEBIT LEDGER
            </span>
          </div>
          <span className="border-[2px] border-[#e8ff00] bg-[#e8ff00] text-[#0a0a0a] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em]">
            VISA DEBIT
          </span>
        </div>

        <div className="my-4 z-10">
          <div className="h-8 w-12 border-[2px] border-[#e8ff00] bg-[#e8ff00]/20 rounded-xs mb-3 flex items-center justify-center">
            <div className="h-4 w-6 border-[1px] border-[#e8ff00] bg-[#e8ff00]/40" />
          </div>
          <div className="text-[20px] sm:text-[24px] font-extrabold tracking-[0.22em] tnum text-[#f4f1ea]">
            {showDetails ? fullCardNumber : maskedCardNumber}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] z-10 border-t border-[#f4f1ea]/20 pt-3">
          <div>
            <span className="text-[8px] text-[#f4f1ea]/50 font-bold uppercase tracking-[0.14em] block">
              CARDHOLDER
            </span>
            <span className="font-extrabold uppercase tracking-[0.14em] text-[#f4f1ea]">
              {customer.name}
            </span>
          </div>

          <div>
            <span className="text-[8px] text-[#f4f1ea]/50 font-bold uppercase tracking-[0.14em] block">
              EXPIRES / CVV
            </span>
            <span className="font-extrabold tnum text-[#f4f1ea]">
              {showDetails ? "09/29 • 882" : "••/•• • •••"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Card Info" : "Show Card Info"}
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyCardNumber}>
          Copy Card Number
        </Button>
      </div>
    </div>
  );
}
