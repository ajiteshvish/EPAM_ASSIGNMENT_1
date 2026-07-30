"use client";

import { useBanking } from "@/features/banking/useBanking";
import { Toggle } from "@/components/ui/Toggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function CardControls() {
  const {
    cardSettings,
    toggleCardFreeze,
    toggleOnlinePayments,
    toggleIntlPayments,
    toggleContactlessPayments,
  } = useBanking();

  return (
    <Card variant="paper" shadow="hard" className="w-full">
      <CardHeader>
        <CardTitle>Card Security Controls</CardTitle>
        <CardDescription>Instant payment permissions</CardDescription>
      </CardHeader>

      <CardContent className="divide-y-[2px] divide-[#0a0a0a]/10">
        <Toggle
          label="Freeze Nexa Black Card"
          description="Temporarily lock all purchases and ATM withdrawals"
          checked={cardSettings.frozen}
          onChange={toggleCardFreeze}
        />

        <Toggle
          label="Online E-Commerce Payments"
          description="Allow web transactions & digital subscriptions"
          checked={cardSettings.onlinePayments}
          onChange={toggleOnlinePayments}
          disabled={cardSettings.frozen}
        />

        <Toggle
          label="International Transactions"
          description="Enable overseas foreign currency purchases"
          checked={cardSettings.internationalPayments}
          onChange={toggleIntlPayments}
          disabled={cardSettings.frozen}
        />

        <Toggle
          label="Contactless & NFC Payments"
          description="Tap & Pay up to £100 per transaction"
          checked={cardSettings.contactlessPayments}
          onChange={toggleContactlessPayments}
          disabled={cardSettings.frozen}
        />
      </CardContent>
    </Card>
  );
}
