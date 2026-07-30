import React from "react";

export function LoadingSkeleton({ className = "", count = 1 }) {
  return (
    <div className="space-y-3 w-full animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-12 bg-[#0a0a0a]/10 border-[2px] border-[#0a0a0a]/20 w-full ${className}`}
        />
      ))}
    </div>
  );
}
