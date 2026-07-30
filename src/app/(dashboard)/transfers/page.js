import { TransferForm } from "@/components/transfers/TransferForm";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export default function TransfersPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        <TransferForm />
      </div>
      <div>
        <RecentTransactions />
      </div>
    </div>
  );
}
