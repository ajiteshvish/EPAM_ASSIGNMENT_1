import React from "react";
import { Input } from "@/components/ui/Input";

export function TransactionSearch({ value, onChange }) {
  return (
    <div className="w-full sm:w-72">
      <Input
        placeholder="Search title, recipient, ref..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        leadingIcon="🔍"
      />
    </div>
  );
}
