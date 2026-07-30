"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-md" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof window === "undefined" || !document.body) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} border-[4px] border-[#0a0a0a] bg-[#f4f1ea] p-6 shadow-hard-lg text-[#0a0a0a] font-mono animate-scaleUp`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-[3px] border-[#0a0a0a] pb-4 mb-5">
          <h2 id="modal-title" className="font-grotesk font-black uppercase text-[20px] tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="border-[2px] border-[#0a0a0a] bg-[#e8ff00] h-8 w-8 flex items-center justify-center font-extrabold text-[14px] hover:bg-[#0a0a0a] hover:text-[#f4f1ea] transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
