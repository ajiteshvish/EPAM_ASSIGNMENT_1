"use client";

import { useState } from "react";
import { useBanking } from "@/features/banking/useBanking";
import { validateTransferAmount, validateAccountNumber, validateSortCode, validateNote } from "@/lib/validators";
import { formatCurrency } from "@/lib/formatters";
import { BeneficiarySelector } from "./BeneficiarySelector";
import { TransferConfirmation } from "./TransferConfirmation";
import { TransferSuccess } from "./TransferSuccess";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function TransferForm() {
  const { selectedAccount, transferMoney } = useBanking();

  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  const [recipientName, setRecipientName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const [errors, setErrors] = useState({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transferDetails, setTransferDetails] = useState(null);

  const handleBeneficiarySelect = (ben) => {
    setSelectedBeneficiary(ben);
    setRecipientName(ben.name);
    setAccountNumber(ben.accountNumber);
    setSortCode(ben.sortCode);
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!recipientName.trim()) {
      newErrors.recipientName = "Recipient name is required.";
    }

    const accErr = validateAccountNumber(accountNumber);
    if (accErr) newErrors.accountNumber = accErr;

    const sortErr = validateSortCode(sortCode);
    if (sortErr) newErrors.sortCode = sortErr;

    const amtErr = validateTransferAmount(amount, selectedAccount.balance);
    if (amtErr) newErrors.amount = amtErr;

    const noteErr = validateNote(reference, 30);
    if (noteErr) newErrors.reference = noteErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      fromAccountId: selectedAccount.id,
      recipientName,
      accountNumber,
      sortCode,
      amount: parseFloat(amount),
      reference: reference || "PAYMENT",
    };

    setTransferDetails(payload);
    setConfirmOpen(true);
  };

  const handleConfirmTransfer = () => {
    setLoading(true);
    setTimeout(() => {
      transferMoney(
        transferDetails.fromAccountId,
        transferDetails.recipientName,
        transferDetails.amount,
        transferDetails.reference
      );
      setLoading(false);
      setConfirmOpen(false);
      setSuccessOpen(true);

      // Reset form
      setAmount("");
      setReference("");
      setErrors({});
    }, 1000);
  };

  return (
    <>
      <Card variant="paper" shadow="hard" className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Send Money</CardTitle>
              <CardDescription>Instant UK Faster Payments</CardDescription>
            </div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] border-[2px] border-[#0a0a0a] bg-[#e8ff00] px-2 py-1">
              Avail: {formatCurrency(selectedAccount.balance)}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Beneficiary Quick Select */}
          <BeneficiarySelector
            selectedId={selectedBeneficiary?.id}
            onSelect={handleBeneficiarySelect}
          />

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <Input
              label="Recipient Full Name"
              placeholder="e.g. Sarah Jenkins"
              value={recipientName}
              onChange={(e) => {
                setRecipientName(e.target.value);
                setErrors((prev) => ({ ...prev, recipientName: null }));
              }}
              error={errors.recipientName}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Account Number (8 digits)"
                placeholder="e.g. 99123341"
                value={accountNumber}
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                  setErrors((prev) => ({ ...prev, accountNumber: null }));
                }}
                error={errors.accountNumber}
                required
              />

              <Input
                label="Sort Code (6 digits)"
                placeholder="e.g. 20-44-12"
                value={sortCode}
                onChange={(e) => {
                  setSortCode(e.target.value);
                  setErrors((prev) => ({ ...prev, sortCode: null }));
                }}
                error={errors.sortCode}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Transfer Amount (£)"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setErrors((prev) => ({ ...prev, amount: null }));
                }}
                error={errors.amount}
                required
              />

              <Input
                label="Payment Reference / Note"
                placeholder="e.g. DINNER-SPLIT"
                value={reference}
                onChange={(e) => {
                  setReference(e.target.value);
                  setErrors((prev) => ({ ...prev, reference: null }));
                }}
                error={errors.reference}
              />
            </div>

            <div className="pt-3">
              <Button type="submit" variant="acid" size="lg" className="w-full">
                Review Transfer Details -&gt;
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <TransferConfirmation
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmTransfer}
        details={transferDetails}
        loading={loading}
      />

      <TransferSuccess
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        details={transferDetails}
      />
    </>
  );
}
