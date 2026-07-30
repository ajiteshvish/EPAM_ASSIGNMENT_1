import React from "react";
import { TRANSACTION_CATEGORIES, TRANSACTION_TYPES } from "@/lib/constants";

export function TransactionFilters({
  type,
  onTypeChange,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono">
      {/* Type Filter */}
      <div className="flex items-center border-[2px] border-[#0a0a0a] bg-[#f4f1ea]">
        {TRANSACTION_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => onTypeChange(t)}
            className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all cursor-pointer ${
              type === t ? "bg-[#0a0a0a] text-[#e8ff00]" : "text-[#0a0a0a] hover:bg-[#e8ff00]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border-[2px] border-[#0a0a0a] bg-[#f4f1ea] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a] focus:outline-none focus:bg-white cursor-pointer"
      >
        {TRANSACTION_CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            Category: {cat}
          </option>
        ))}
      </select>

      {/* Sort By Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border-[2px] border-[#0a0a0a] bg-[#f4f1ea] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a] focus:outline-none focus:bg-white cursor-pointer"
      >
        <option value="date-desc">Newest First</option>
        <option value="date-asc">Oldest First</option>
        <option value="amount-desc">Highest Amount</option>
        <option value="amount-asc">Lowest Amount</option>
      </select>
    </div>
  );
}
