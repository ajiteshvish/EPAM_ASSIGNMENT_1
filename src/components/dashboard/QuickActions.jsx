"use client";

import Link from "next/link";

const ACTIONS = [
  { name: "Send Money", href: "/transfers", icon: "💸", desc: "Fast UK Bank Transfer" },
  { name: "Manage Cards", href: "/cards", icon: "💳", desc: "Freeze & Security Rules" },
  { name: "Transactions", href: "/transactions", icon: "🧾", desc: "Audit History & Search" },
  { name: "Analytics", href: "/analytics", icon: "📈", desc: "Spending & Income Graph" },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
      {ACTIONS.map((action) => (
        <Link
          key={action.name}
          href={action.href}
          className="border-[3px] border-[#0a0a0a] bg-[#f4f1ea] p-4 shadow-hard-sm hover:bg-[#e8ff00] hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
        >
          <div className="text-[24px] mb-2">{action.icon}</div>
          <div>
            <div className="font-extrabold text-[12px] uppercase tracking-[0.14em] text-[#0a0a0a]">
              {action.name}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/60 mt-0.5 group-hover:text-[#0a0a0a]">
              {action.desc}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
