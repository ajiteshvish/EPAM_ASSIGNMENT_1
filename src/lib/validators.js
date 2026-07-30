export function validateTransferAmount(amount, availableBalance) {
  const numericAmount = parseFloat(amount);
  if (!amount || isNaN(numericAmount)) {
    return "Please enter a valid amount.";
  }
  if (numericAmount <= 0) {
    return "Amount must be greater than £0.00.";
  }
  if (numericAmount > availableBalance) {
    return `Insufficient funds. Your available balance is £${availableBalance.toFixed(2)}.`;
  }
  return null;
}

export function validateAccountNumber(accNum) {
  if (!accNum || typeof accNum !== "string") {
    return "Account number is required.";
  }
  const clean = accNum.replace(/[\s-]/g, "");
  if (!/^\d{8,16}$/.test(clean)) {
    return "Invalid account number (must be 8-16 digits).";
  }
  return null;
}

export function validateSortCode(sortCode) {
  if (!sortCode || typeof sortCode !== "string") {
    return "Sort code is required.";
  }
  const clean = sortCode.replace(/[\s-]/g, "");
  if (!/^\d{6}$/.test(clean)) {
    return "Invalid sort code (must be 6 digits).";
  }
  return null;
}

export function validateNote(note, maxLength = 100) {
  if (note && note.length > maxLength) {
    return `Reference note cannot exceed ${maxLength} characters.`;
  }
  return null;
}
