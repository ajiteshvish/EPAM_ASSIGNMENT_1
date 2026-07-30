import React, { useId } from "react";

export function Input({
  label,
  error,
  helperText,
  id,
  type = "text",
  className = "",
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  leadingIcon,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`flex flex-col gap-1.5 w-full font-mono ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a0a0a]">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {leadingIcon && (
          <span className="absolute left-3 text-[#0a0a0a]/60 pointer-events-none">{leadingIcon}</span>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full border-[3px] border-[#0a0a0a] bg-[#f4f1ea] px-4 py-2.5 font-mono text-[13px] text-[#0a0a0a] placeholder:text-[#0a0a0a]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed ${
            leadingIcon ? "pl-10" : ""
          } ${error ? "border-red-600 bg-red-50" : ""}`}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] font-bold text-red-600 uppercase tracking-[0.12em] mt-0.5">{error}</p>}
      {helperText && !error && (
        <p className="text-[10px] font-medium text-[#0a0a0a]/60 uppercase tracking-[0.12em]">{helperText}</p>
      )}
    </div>
  );
}
