"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MOBILE_NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: "📊" },
  { name: "Activity", href: "/transactions", icon: "🧾" },
  { name: "Pay", href: "/transfers", icon: "💸" },
  { name: "Cards", href: "/cards", icon: "💳" },
  { name: "More", href: "/settings", icon: "⚙️" },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t-4 border-[#0a0a0a] bg-[#f4f1ea] px-2 py-1.5 flex items-center justify-around font-mono select-none shadow-hard-lg">
      {MOBILE_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 text-center transition-all ${
              isActive
                ? "bg-[#0a0a0a] text-[#e8ff00] border-[2px] border-[#0a0a0a] font-extrabold"
                : "text-[#0a0a0a] hover:bg-[#e8ff00]"
            }`}
          >
            <span className="text-[16px]">{item.icon}</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] mt-0.5">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
