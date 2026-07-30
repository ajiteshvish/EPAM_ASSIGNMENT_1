"use client";

import { useBanking } from "@/features/banking/useBanking";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function CardSecuritySettings() {
  const { addToast } = useBanking();

  const handleResetPin = () => {
    addToast("PIN reset SMS instructions sent to your registered mobile.");
  };

  const handleReportLost = () => {
    addToast("Security team notified. Card block initiated.", "danger");
  };

  return (
    <Card variant="paper" shadow="hard" className="w-full">
      <CardHeader>
        <CardTitle>Spending Limits &amp; PIN</CardTitle>
        <CardDescription>Daily card thresholds &amp; replacement</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 font-mono">
        <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea] flex justify-between items-center">
          <div>
            <div className="font-extrabold text-[12px] uppercase">Daily ATM Limit</div>
            <div className="text-[10px] text-[#0a0a0a]/60 uppercase">Max cash withdrawal per day</div>
          </div>
          <div className="font-extrabold text-[14px] tnum">£500.00</div>
        </div>

        <div className="border-[2px] border-[#0a0a0a] p-3 bg-[#f4f1ea] flex justify-between items-center">
          <div>
            <div className="font-extrabold text-[12px] uppercase">Daily Online Limit</div>
            <div className="text-[10px] text-[#0a0a0a]/60 uppercase">Max web transactions per day</div>
          </div>
          <div className="font-extrabold text-[14px] tnum">£2,500.00</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button variant="secondary" size="sm" onClick={handleResetPin} className="flex-1">
            Reset Card PIN
          </Button>
          <Button variant="danger" size="sm" onClick={handleReportLost} className="flex-1">
            Report Stolen Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
