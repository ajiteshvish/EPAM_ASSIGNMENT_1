"use client";

import React from "react";
import { useBanking } from "@/features/banking/useBanking";

export function ToastContainer() {
  const { toasts, removeToast } = useBanking();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 font-mono pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto border-[3px] border-[#0a0a0a] bg-[#e8ff00] text-[#0a0a0a] p-4 shadow-hard-lg flex items-center justify-between gap-3 animate-slideUp"
          role="alert"
        >
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[14px]">✓</span>
            <span className="text-[12px] font-extrabold uppercase tracking-[0.12em]">
              {toast.message}
            </span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[12px] font-bold hover:text-[#0a0a0a]/60 px-1"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
