"use client";

import { useBanking } from "@/features/banking/useBanking";

export function BeneficiarySelector({ selectedId, onSelect }) {
  const { beneficiaries } = useBanking();

  return (
    <div className="space-y-2 font-mono">
      <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a0a0a] block">
        Select Saved Beneficiary
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {beneficiaries.map((ben) => {
          const isSelected = selectedId === ben.id;
          return (
            <button
              key={ben.id}
              type="button"
              onClick={() => onSelect(ben)}
              className={`p-3 border-[2.5px] border-[#0a0a0a] text-left transition-all cursor-pointer select-none flex items-center gap-3 ${
                isSelected
                  ? "bg-[#0a0a0a] text-[#f4f1ea] shadow-hard-sm"
                  : "bg-[#f4f1ea] text-[#0a0a0a] hover:bg-[#e8ff00]"
              }`}
            >
              <div
                className={`h-8 w-8 border-[2px] border-[#0a0a0a] flex items-center justify-center font-extrabold text-[11px] ${
                  isSelected ? "bg-[#e8ff00] text-[#0a0a0a]" : ben.avatarColor || "bg-[#e8ff00]"
                }`}
              >
                {ben.initials}
              </div>
              <div className="truncate">
                <div className="font-extrabold text-[11px] uppercase truncate">{ben.name}</div>
                <div className="text-[9px] font-bold tracking-[0.08em] opacity-80 truncate">{ben.bank}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
