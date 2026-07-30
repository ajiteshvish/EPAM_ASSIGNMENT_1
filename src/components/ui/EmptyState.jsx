import React from "react";
import { Button } from "./Button";

export function EmptyState({
  title = "No data found",
  description = "There are no records matching your request.",
  actionLabel,
  onAction,
  icon,
}) {
  return (
    <div className="border-[3px] border-dashed border-[#0a0a0a]/30 p-8 text-center flex flex-col items-center justify-center font-mono my-4 bg-[#f4f1ea]/50">
      {icon && <div className="text-[32px] mb-3 text-[#0a0a0a]">{icon}</div>}
      <h4 className="font-grotesk font-black uppercase text-[18px] text-[#0a0a0a] mb-1">
        {title}
      </h4>
      <p className="text-[12px] uppercase text-[#0a0a0a]/60 tracking-[0.14em] max-w-sm mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
