"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBanking } from "@/features/banking/useBanking";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";

const TITLE_MAP = {
  "/dashboard": "ACCOUNT OVERVIEW",
  "/transactions": "TRANSACTION HISTORY",
  "/transfers": "PAYMENTS & TRANSFERS",
  "/cards": "CARD CONTROLS & SECURITY",
  "/analytics": "SPENDING ANALYTICS",
  "/settings": "ACCOUNT SETTINGS",
};

export function DashboardHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { selectedAccount, depositMoney, withdrawMoney, logout } = useBanking();

  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const pageTitle = TITLE_MAP[pathname] || "DASHBOARD";

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (!amount || isNaN(num) || num <= 0) {
      setError("Please enter a valid amount greater than £0.00.");
      return;
    }
    depositMoney(selectedAccount.id, num, note || "Direct Deposit");
    setAmount("");
    setNote("");
    setError("");
    setDepositOpen(false);
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (!amount || isNaN(num) || num <= 0) {
      setError("Please enter a valid amount greater than £0.00.");
      return;
    }
    if (num > selectedAccount.balance) {
      setError(`Insufficient balance (£${selectedAccount.balance.toFixed(2)} available).`);
      return;
    }
    withdrawMoney(selectedAccount.id, num, note || "ATM Withdrawal");
    setAmount("");
    setNote("");
    setError("");
    setWithdrawOpen(false);
  };

  return (
    <>
      <header className="h-20 border-b-4 border-[#0a0a0a] bg-[#f4f1ea] px-6 flex items-center justify-between font-mono sticky top-0 z-30 select-none">
        {/* Title */}
        <div className="flex items-center gap-3">
          <h1 className="font-grotesk font-black text-[20px] sm:text-[24px] uppercase tracking-tight text-[#0a0a0a]">
            {pageTitle}
          </h1>
          <span className="hidden sm:inline-block border-[2px] border-[#0a0a0a] bg-[#e8ff00] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em]">
            UK LIVE
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="secondary" size="sm" onClick={() => setDepositOpen(true)}>
            + Deposit
          </Button>
          <Button variant="primary" size="sm" onClick={() => setWithdrawOpen(true)}>
            - Withdraw
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout} title="Logout">
            🚪 Logout
          </Button>
        </div>
      </header>

      {/* Deposit Modal */}
      <Modal isOpen={depositOpen} onClose={() => setDepositOpen(false)} title="DEPOSIT FUNDS">
        <form onSubmit={handleDepositSubmit} className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#0a0a0a]/70">
            Target Account: <strong className="text-[#0a0a0a]">{selectedAccount.name}</strong> (£
            {selectedAccount.balance.toFixed(2)})
          </p>

          <Input
            label="Deposit Amount (£)"
            type="number"
            step="0.01"
            placeholder="e.g. 500.00"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
            error={error}
            required
          />

          <Input
            label="Reference / Note"
            placeholder="e.g. Monthly Salary Deposit"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="ghost" onClick={() => setDepositOpen(false)}>
              Cancel
            </Button>

            <Button type="submit" variant="acid">
              Confirm Deposit
            </Button>
          </div>
        </form>
      </Modal>

      {/* Withdraw Modal */}
      <Modal isOpen={withdrawOpen} onClose={() => setWithdrawOpen(false)} title="WITHDRAW CASH">
        <form onSubmit={handleWithdrawSubmit} className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#0a0a0a]/70">
            Source Account: <strong className="text-[#0a0a0a]">{selectedAccount.name}</strong> (£
            {selectedAccount.balance.toFixed(2)})
          </p>

          <Input
            label="Withdrawal Amount (£)"
            type="number"
            step="0.01"
            placeholder="e.g. 100.00"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setError("");
            }}
            error={error}
            required
          />

          <Input
            label="ATM / Note Reference"
            placeholder="e.g. Cash Expense"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="ghost" onClick={() => setWithdrawOpen(false)}>
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              Confirm Withdrawal
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
