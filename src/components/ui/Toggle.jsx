import React, { useId } from "react";

export function Toggle({ checked = false, onChange, label, description, disabled = false, id }) {
  const generatedId = useId();
  const toggleId = id || generatedId;

  return (
    <div className="flex items-center justify-between gap-4 font-mono py-2">
      {(label || description) && (
        <label htmlFor={toggleId} className="cursor-pointer select-none">
          {label && <div className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0a0a0a]">{label}</div>}
          {description && <div className="text-[10px] text-[#0a0a0a]/60 font-medium uppercase tracking-[0.12em] mt-0.5">{description}</div>}
        </label>
      )}
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer border-[3px] border-[#0a0a0a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] ${
          checked ? "bg-[#e8ff00]" : "bg-[#0a0a0a]/20"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 border-[2px] border-[#0a0a0a] bg-[#0a0a0a] transition-transform ${
            checked ? "translate-x-6 bg-[#0a0a0a]" : "translate-x-0 bg-[#f4f1ea]"
          }`}
        />
      </button>
    </div>
  );
}
