"use client";

import { useBanking } from "@/features/banking/useBanking";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const { customer, resetDemoData } = useBanking();

  return (
    <div className="space-y-8 font-mono max-w-4xl">
      <div className="border-b-[3px] border-[#0a0a0a] pb-4">
        <h2 className="font-grotesk font-black text-[24px] uppercase text-[#0a0a0a]">
          Customer Account Settings
        </h2>
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#0a0a0a]/60 mt-0.5">
          Profile information, security preferences, and demo environment reset
        </p>
      </div>

      <Card variant="paper" shadow="hard">
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>Verified Nexa Customer Profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-2 text-[12px]">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Full Name</span>
            <span className="font-extrabold uppercase">{customer.name}</span>
          </div>
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-2 text-[12px]">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Email Address</span>
            <span className="font-extrabold">{customer.email}</span>
          </div>
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-2 text-[12px]">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Mobile Phone</span>
            <span className="font-extrabold tnum">{customer.phone}</span>
          </div>
          <div className="flex justify-between border-b border-[#0a0a0a]/20 pb-2 text-[12px]">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Membership Tier</span>
            <span className="font-extrabold uppercase text-amber-700">{customer.tier}</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-[#0a0a0a]/60 uppercase font-bold">Registered Address</span>
            <span className="font-extrabold uppercase">{customer.address}</span>
          </div>
        </CardContent>
      </Card>

      <Card variant="paper" shadow="hard">
        <CardHeader>
          <CardTitle>Reset Demo State</CardTitle>
          <CardDescription>Purge localStorage cache &amp; restore initial mock data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-[12px] uppercase text-[#0a0a0a]/80 leading-relaxed">
            This will reset all balances, created transactions, transfer activity, and card rule overrides back to factory demo defaults.
          </p>
          <Button variant="danger" onClick={resetDemoData}>
            Reset All Banking Demo Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
