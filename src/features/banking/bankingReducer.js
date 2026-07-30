import { BANKING_ACTIONS } from "./bankingActions";

export function bankingReducer(state, action) {
  switch (action.type) {
    case BANKING_ACTIONS.SET_INITIAL_STATE:
      return {
        ...state,
        ...action.payload,
      };

    case BANKING_ACTIONS.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };

    case BANKING_ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    case BANKING_ACTIONS.SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccountId: action.payload,
      };

    case BANKING_ACTIONS.DEPOSIT: {
      const { accountId, amount, note } = action.payload;
      const numAmount = parseFloat(amount);

      const updatedAccounts = state.accounts.map((acc) =>
        acc.id === accountId ? { ...acc, balance: acc.balance + numAmount } : acc
      );

      const newTx = {
        id: `tx_${Date.now()}`,
        title: note || "Funds Deposit",
        category: "Deposit",
        type: "credit",
        amount: numAmount,
        currency: "GBP",
        date: new Date().toISOString(),
        status: "completed",
        recipient: "Self Deposit",
        reference: `DEP-${Math.floor(1000 + Math.random() * 9000)}`,
        icon: "arrow-down-left",
      };

      return {
        ...state,
        accounts: updatedAccounts,
        transactions: [newTx, ...state.transactions],
      };
    }

    case BANKING_ACTIONS.WITHDRAW: {
      const { accountId, amount, note } = action.payload;
      const numAmount = parseFloat(amount);

      const updatedAccounts = state.accounts.map((acc) =>
        acc.id === accountId ? { ...acc, balance: acc.balance - numAmount } : acc
      );

      const newTx = {
        id: `tx_${Date.now()}`,
        title: note || "ATM Withdrawal",
        category: "Withdrawal",
        type: "debit",
        amount: numAmount,
        currency: "GBP",
        date: new Date().toISOString(),
        status: "completed",
        recipient: "Cash Withdrawal",
        reference: `WTH-${Math.floor(1000 + Math.random() * 9000)}`,
        icon: "arrow-up-right",
      };

      return {
        ...state,
        accounts: updatedAccounts,
        transactions: [newTx, ...state.transactions],
      };
    }

    case BANKING_ACTIONS.TRANSFER: {
      const { fromAccountId, recipientName, amount, reference } = action.payload;
      const numAmount = parseFloat(amount);

      const updatedAccounts = state.accounts.map((acc) =>
        acc.id === fromAccountId ? { ...acc, balance: acc.balance - numAmount } : acc
      );

      const newTx = {
        id: `tx_${Date.now()}`,
        title: `Transfer to ${recipientName}`,
        category: "Transfer",
        type: "debit",
        amount: numAmount,
        currency: "GBP",
        date: new Date().toISOString(),
        status: "completed",
        recipient: recipientName,
        reference: reference || "NEXA-ONLINE-PAYMENT",
        icon: "send",
      };

      return {
        ...state,
        accounts: updatedAccounts,
        transactions: [newTx, ...state.transactions],
      };
    }

    case BANKING_ACTIONS.TOGGLE_CARD_FREEZE:
      return {
        ...state,
        cardSettings: {
          ...state.cardSettings,
          frozen: !state.cardSettings.frozen,
        },
      };

    case BANKING_ACTIONS.TOGGLE_ONLINE_PAYMENTS:
      return {
        ...state,
        cardSettings: {
          ...state.cardSettings,
          onlinePayments: !state.cardSettings.onlinePayments,
        },
      };

    case BANKING_ACTIONS.TOGGLE_INTL_PAYMENTS:
      return {
        ...state,
        cardSettings: {
          ...state.cardSettings,
          internationalPayments: !state.cardSettings.internationalPayments,
        },
      };

    case BANKING_ACTIONS.TOGGLE_CONTACTLESS_PAYMENTS:
      return {
        ...state,
        cardSettings: {
          ...state.cardSettings,
          contactlessPayments: !state.cardSettings.contactlessPayments,
        },
      };

    case BANKING_ACTIONS.RESET_DEMO_DATA:
      return {
        ...action.payload,
        isAuthenticated: true,
      };

    case BANKING_ACTIONS.ADD_TOAST:
      return {
        ...state,
        toasts: [...(state.toasts || []), { id: Date.now(), ...action.payload }],
      };

    case BANKING_ACTIONS.REMOVE_TOAST:
      return {
        ...state,
        toasts: (state.toasts || []).filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
}
