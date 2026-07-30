"use client";

import Link from "next/link";
import { useBanking } from "@/features/banking/useBanking";

export function BankCardPreview() {
  const { customer, cardSettings, toggleCardFreeze } = useBanking();
  const isFrozen = cardSettings.frozen;

  return (
    <div className="relative border-[4px] border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f1ea] p-6 shadow-hard-lg font-mono flex flex-col justify-between h-56 select-none overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e8ff00_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      {/* Frozen Overlay */}
      {isFrozen && (
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-xs z-10 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[28px] mb-1">❄️</span>
          <span className="font-grotesk font-black text-[#e8ff00] text-[18px] uppercase tracking-wider">
            CARD IS FROZEN
          </span>
          <span className="text-[10px] text-[#f4f1ea]/70 uppercase tracking-[0.14em] mt-1 mb-3">
            All card payments are temporarily blocked
          </span>
          <button
            onClick={toggleCardFreeze}
            className="border-[2px] border-[#e8ff00] bg-[#e8ff00] text-[#0a0a0a] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] hover:bg-[#f4f1ea] transition-all cursor-pointer"
          >
            Unfreeze Card
          </button>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex items-center justify-between z-0">
        <span className="font-grotesk font-black text-[16px] tracking-tight uppercase text-[#e8ff00]">
          NEXA BLACK
        </span>
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase border-[1.5px] border-[#e8ff00] px-2 py-0.5 text-[#e8ff00]">
          DEBIT
        </span>
      </div>

      {/* Chip & Number */}
      <div className="my-2 z-0">
        <div className="h-7 w-10 border-[2px] border-[#e8ff00] bg-[#e8ff00]/20 rounded-xs mb-3 flex items-center justify-center">
          <span className="h-3 w-4 border-[1px] border-[#e8ff00]" />
        </div>
        <div className="text-[18px] font-extrabold tracking-[0.25em] tnum text-[#f4f1ea]">
          •••• •••• •••• 8842
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex items-center justify-between z-0">
        <div>
          <span className="text-[8px] text-[#f4f1ea]/50 font-bold uppercase tracking-[0.14em] block">
            CARDHOLDER
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em]">
            {customer.name}
          </span>
        </div>

        <Link
          href="/cards"
          className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#e8ff00] hover:underline"
        >
          Card Rules -&gt;
        </Link>
      </div>
    </div>
  );
}
