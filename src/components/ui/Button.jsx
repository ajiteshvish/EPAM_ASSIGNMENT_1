import React from "react";

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono uppercase font-bold tracking-[0.14em] transition-all cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed border-[3px] border-[#0a0a0a]";

  const variants = {
    primary:
      "bg-[#0a0a0a] text-[#f4f1ea] shadow-hard-sm hover:-translate-y-0.5 hover:bg-[#e8ff00] hover:text-[#0a0a0a]",
    acid: "bg-[#e8ff00] text-[#0a0a0a] shadow-hard-sm hover:-translate-y-0.5 hover:bg-[#0a0a0a] hover:text-[#f4f1ea]",
    secondary:
      "bg-[#f4f1ea] text-[#0a0a0a] shadow-hard-sm hover:-translate-y-0.5 hover:bg-[#e8ff00]",
    outline:
      "bg-transparent text-[#0a0a0a] border-[2px] hover:bg-[#0a0a0a] hover:text-[#f4f1ea]",
    danger:
      "bg-red-600 text-white shadow-hard-sm hover:-translate-y-0.5 hover:bg-red-700",
    ghost:
      "border-transparent bg-transparent text-[#0a0a0a] hover:bg-[#0a0a0a]/10 border-0 shadow-none",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-5 py-2.5 text-[12px]",
    lg: "px-7 py-3.5 text-[13px]",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
