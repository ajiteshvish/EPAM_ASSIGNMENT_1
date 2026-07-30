"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBanking } from "@/features/banking/useBanking";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: "📊" },
  { name: "Transactions", href: "/transactions", icon: "🧾" },
  { name: "Transfers & Pay", href: "/transfers", icon: "💸" },
  { name: "Card Controls", href: "/cards", icon: "💳" },
  { name: "Analytics", href: "/analytics", icon: "📈" },
  { name: "Account Settings", href: "/settings", icon: "⚙️" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { customer, resetDemoData } = useBanking();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r-4 border-[#0a0a0a] bg-[#f4f1ea] min-h-screen shrink-0 font-mono select-none">
      {/* Brand Header */}
      <div className="h-20 border-b-4 border-[#0a0a0a] px-6 flex items-center gap-3">
        <div className="h-10 w-10 border-[3px] border-[#0a0a0a] bg-[#e8ff00] shadow-hard-sm flex items-center justify-center font-extrabold text-[16px]">
          N
        </div>
        <div className="flex flex-col">
          <span className="font-grotesk font-black text-[18px] tracking-tight uppercase leading-none">
            NEXABANK
          </span>
          <span className="text-[9px] font-bold tracking-[0.18em] text-[#0a0a0a]/60 uppercase mt-0.5">
            Core Banking OS
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="px-2 text-[10px] font-bold text-[#0a0a0a]/50 uppercase tracking-[0.2em] mb-3">
          Main Menu
        </div>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 border-[3px] transition-all font-bold text-[12px] uppercase tracking-[0.14em] ${
                isActive
                  ? "bg-[#0a0a0a] text-[#f4f1ea] border-[#0a0a0a] shadow-hard-sm"
                  : "border-transparent text-[#0a0a0a] hover:bg-[#e8ff00] hover:border-[#0a0a0a]"
              }`}
            >
              <span className="text-[14px]">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Customer Profile & Demo Reset */}
      <div className="p-4 border-t-4 border-[#0a0a0a] bg-[#f4f1ea] space-y-3">
        <div className="border-[3px] border-[#0a0a0a] bg-[#e8ff00] p-3 shadow-hard-sm flex items-center gap-3">
          <div className="h-9 w-9 border-[2px] border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f1ea] font-extrabold flex items-center justify-center text-[12px]">
            {customer.avatar || "AM"}
          </div>
          <div className="flex flex-col truncate">
            <span className="font-extrabold text-[12px] truncate uppercase">{customer.name}</span>
            <span className="text-[9px] font-bold text-[#0a0a0a]/70 uppercase tracking-[0.1em] truncate">
              {customer.tier}
            </span>
          </div>
        </div>

        <button
          onClick={resetDemoData}
          className="w-full border-[2px] border-[#0a0a0a] bg-[#f4f1ea] py-1.5 px-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0a0a] hover:bg-red-600 hover:text-white transition-all"
        >
          Reset Demo Data
        </button>
      </div>
    </aside>
  );
}
