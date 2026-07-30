import { BankCard } from "@/components/cards/BankCard";
import { CardControls } from "@/components/cards/CardControls";
import { CardSecuritySettings } from "@/components/cards/CardSecuritySettings";

export default function CardsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <BankCard />
        <CardSecuritySettings />
      </div>
      <div>
        <CardControls />
      </div>
    </div>
  );
}
