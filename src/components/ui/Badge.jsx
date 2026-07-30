import React from "react";

export function Badge({ children, variant = "neutral", className = "", size = "md" }) {
  const base = "inline-flex items-center gap-1.5 border-[2px] border-[#0a0a0a] font-mono font-bold uppercase tracking-[0.1em] text-[#0a0a0a]";

  const variants = {
    success: "bg-[#e8ff00] text-[#0a0a0a]", // Paid / Active / Completed
    pending: "bg-[#f4f1ea] text-[#0a0a0a]", // Pending
    danger: "bg-[#0a0a0a] text-[#f4f1ea]", // Unpaid / Frozen
    info: "bg-blue-200 text-[#0a0a0a]",
    neutral: "bg-[#0a0a0a]/10 text-[#0a0a0a]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-[11px]",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.neutral} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
}
