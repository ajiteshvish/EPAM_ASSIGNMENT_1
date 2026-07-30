"use client";

import { useContext } from "react";
import { BankingContext } from "./BankingProvider";

export function useBanking() {
  const context = useContext(BankingContext);
  if (!context) {
    throw new Error("useBanking must be used within a BankingProvider");
  }
  return context;
}
