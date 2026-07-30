import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function FinancialInsight() {
  return (
    <Card variant="acid" shadow="hard" className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="text-[20px]">⚡</span>
          <CardTitle className="text-[16px]">Nexa Smart Insight</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="font-mono space-y-2">
        <p className="text-[12px] font-extrabold uppercase leading-snug text-[#0a0a0a]">
          Your dining &amp; entertainment spending is down 14% this month!
        </p>
        <p className="text-[10px] font-medium uppercase text-[#0a0a0a]/80 tracking-[0.1em]">
          You are on track to save an extra £140.00 by month-end. Consider sweeping surplus funds into your High-Yield Savings Vault (4.85% APY).
        </p>
      </CardContent>
    </Card>
  );
}
