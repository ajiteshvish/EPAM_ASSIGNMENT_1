"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBanking } from "@/features/banking/useBanking";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated, isHydrated } = useBanking();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.push("/login");
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated) {
    return (
      <div className="p-8 space-y-6 font-mono bg-[#f4f1ea] min-h-screen">
        <LoadingSkeleton count={4} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <DashboardShell>{children}</DashboardShell>;
}
