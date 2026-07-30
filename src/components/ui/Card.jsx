import React from "react";

export function Card({ children, className = "", variant = "paper", shadow = "hard", ...props }) {
  const shadowStyles = {
    none: "",
    sm: "shadow-hard-sm",
    hard: "shadow-hard",
    lg: "shadow-hard-lg",
    acid: "shadow-hard-acid",
  };

  const variantStyles = {
    paper: "bg-[#f4f1ea] border-[#0a0a0a] text-[#0a0a0a]",
    acid: "bg-[#e8ff00] border-[#0a0a0a] text-[#0a0a0a]",
    ink: "bg-[#0a0a0a] border-[#0a0a0a] text-[#f4f1ea]",
  };

  return (
    <div
      className={`border-[3px] p-6 transition-all ${variantStyles[variant] || variantStyles.paper} ${shadowStyles[shadow] || ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`flex flex-col gap-1 mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`font-grotesk font-black uppercase text-[18px] sm:text-[22px] tracking-tight leading-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.14em] text-[#0a0a0a]/60 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`mt-6 pt-4 border-t-[2px] border-[#0a0a0a]/10 flex items-center justify-between ${className}`}>{children}</div>;
}
