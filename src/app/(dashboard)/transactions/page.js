"use client";

import { useState } from "react";
import { useBanking } from "@/features/banking/useBanking";
import { filterTransactions } from "@/lib/transactionHelpers";
import { TransactionSearch } from "@/components/transactions/TransactionSearch";
import { TransactionFilters } from "@/components/transactions/TransactionFilters";
import { TransactionList } from "@/components/transactions/TransactionList";
import { Button } from "@/components/ui/Button";

export default function TransactionsPage() {
  const { transactions, addToast } = useBanking();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");

  const filtered = filterTransactions(transactions, {
    search,
    type,
    category,
    sortBy,
  });

  const handleExportCSV = () => {
    const headers = ["ID", "Title", "Category", "Type", "Amount", "Date", "Status", "Reference"];
    const rows = filtered.map((t) => [
      t.id,
      `"${t.title}"`,
      t.category,
      t.type,
      t.amount,
      t.date,
      t.status,
      `"${t.reference || ""}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `NexaBank_Transactions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast("Exported transactions to CSV!");
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-[3px] border-[#0a0a0a] pb-4">
        <div>
          <h2 className="font-grotesk font-black text-[24px] uppercase text-[#0a0a0a]">
            Audit Ledger ({filtered.length} Entries)
          </h2>
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#0a0a0a]/60 mt-0.5">
            Complete real-time transaction ledger &amp; search records
          </p>
        </div>

        <Button variant="secondary" size="sm" onClick={handleExportCSV}>
          📥 Export CSV
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#f4f1ea] border-[3px] border-[#0a0a0a] p-4 shadow-hard-sm">
        <TransactionSearch value={search} onChange={setSearch} />
        <TransactionFilters
          type={type}
          onTypeChange={setType}
          category={category}
          onCategoryChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Transaction Table / List */}
      <TransactionList transactions={filtered} />
    </div>
  );
}
