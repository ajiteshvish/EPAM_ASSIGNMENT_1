"use client";

import { createContext, useReducer, useEffect, useState } from "react";
import { initialCustomer } from "@/data/customer";
import { initialAccounts } from "@/data/accounts";
import { initialTransactions } from "@/data/transactions";
import { initialBeneficiaries } from "@/data/beneficiaries";
import { LOCAL_STORAGE_KEY } from "@/lib/constants";
import { BANKING_ACTIONS } from "./bankingActions";
import { bankingReducer } from "./bankingReducer";

export const BankingContext = createContext(null);

const defaultInitialState = {
  isAuthenticated: true,
  customer: initialCustomer,
  accounts: initialAccounts,
  selectedAccountId: "acc_main",
  transactions: initialTransactions,
  beneficiaries: initialBeneficiaries,
  cardSettings: {
    frozen: false,
    onlinePayments: true,
    internationalPayments: false,
    contactlessPayments: true,
  },
  toasts: [],
};

export function BankingProvider({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [state, dispatch] = useReducer(bankingReducer, defaultInitialState);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: BANKING_ACTIONS.SET_INITIAL_STATE, payload: parsed });
      }
    } catch (err) {
      console.warn("Failed to load banking state from localStorage:", err);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save state updates to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        const { toasts, ...persistedState } = state;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(persistedState));
      } catch (err) {
        console.warn("Failed to save banking state to localStorage:", err);
      }
    }
  }, [state, isHydrated]);

  // Action Helpers
  const addToast = (message, type = "success") => {
    const id = Date.now();
    dispatch({ type: BANKING_ACTIONS.ADD_TOAST, payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: BANKING_ACTIONS.REMOVE_TOAST, payload: id });
    }, 4000);
  };

  const login = (email, password) => {
    if (email === "alex@nexabank.com" && password === "nexa1234") {
      dispatch({ type: BANKING_ACTIONS.LOGIN });
      addToast("Welcome back, Alex! Login successful.");
      return { success: true };
    }
    return { success: false, error: "Invalid email or password." };
  };

  const logout = () => {
    dispatch({ type: BANKING_ACTIONS.LOGOUT });
    addToast("Logged out safely from NexaBank.");
  };

  const selectAccount = (accountId) => {
    dispatch({ type: BANKING_ACTIONS.SELECT_ACCOUNT, payload: accountId });
  };

  const depositMoney = (accountId, amount, note) => {
    dispatch({ type: BANKING_ACTIONS.DEPOSIT, payload: { accountId, amount, note } });
    addToast(`Successfully deposited £${parseFloat(amount).toFixed(2)} into account.`);
  };

  const withdrawMoney = (accountId, amount, note) => {
    dispatch({ type: BANKING_ACTIONS.WITHDRAW, payload: { accountId, amount, note } });
    addToast(`Successfully withdrew £${parseFloat(amount).toFixed(2)}.`);
  };

  const transferMoney = (fromAccountId, recipientName, amount, reference) => {
    dispatch({
      type: BANKING_ACTIONS.TRANSFER,
      payload: { fromAccountId, recipientName, amount, reference },
    });
    addToast(`Transferred £${parseFloat(amount).toFixed(2)} to ${recipientName}.`);
  };

  const toggleCardFreeze = () => {
    dispatch({ type: BANKING_ACTIONS.TOGGLE_CARD_FREEZE });
    const isFrozenNow = !state.cardSettings.frozen;
    addToast(isFrozenNow ? "Nexa Black Card has been frozen." : "Nexa Black Card unfrozen.");
  };

  const toggleOnlinePayments = () => {
    dispatch({ type: BANKING_ACTIONS.TOGGLE_ONLINE_PAYMENTS });
    addToast("Online payment settings updated.");
  };

  const toggleIntlPayments = () => {
    dispatch({ type: BANKING_ACTIONS.TOGGLE_INTL_PAYMENTS });
    addToast("International transaction settings updated.");
  };

  const toggleContactlessPayments = () => {
    dispatch({ type: BANKING_ACTIONS.TOGGLE_CONTACTLESS_PAYMENTS });
    addToast("Contactless payment settings updated.");
  };

  const resetDemoData = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {}
    dispatch({ type: BANKING_ACTIONS.RESET_DEMO_DATA, payload: defaultInitialState });
    addToast("Banking state reset to initial demo data.");
  };

  const selectedAccount =
    state.accounts.find((a) => a.id === state.selectedAccountId) || state.accounts[0];

  const value = {
    ...state,
    selectedAccount,
    isHydrated,
    dispatch,
    login,
    logout,
    selectAccount,
    depositMoney,
    withdrawMoney,
    transferMoney,
    toggleCardFreeze,
    toggleOnlinePayments,
    toggleIntlPayments,
    toggleContactlessPayments,
    resetDemoData,
    addToast,
    removeToast: (id) => dispatch({ type: BANKING_ACTIONS.REMOVE_TOAST, payload: id }),
  };

  return <BankingContext.Provider value={value}>{children}</BankingContext.Provider>;
}
