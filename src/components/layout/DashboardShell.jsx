import React from "react";
import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MobileNavigation } from "./MobileNavigation";
import { ToastContainer } from "@/components/ui/Toast";

export function DashboardShell({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f4f1ea] text-[#0a0a0a] font-mono selection:bg-[#e8ff00] selection:text-[#0a0a0a]">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <DashboardHeader />
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-[1400px] w-full mx-auto space-y-8">
          {children}
        </main>
      </div>
      <MobileNavigation />
      <ToastContainer />
    </div>
  );
}
