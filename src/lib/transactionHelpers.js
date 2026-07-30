export function filterTransactions(transactions = [], { search = "", type = "All", category = "All", sortBy = "date-desc" } = {}) {
  let result = [...transactions];

  if (search.trim()) {
    const q = search.toLowerCase().trim();
    result = result.filter(
      (tx) =>
        tx.title.toLowerCase().includes(q) ||
        tx.recipient?.toLowerCase().includes(q) ||
        tx.category.toLowerCase().includes(q) ||
        tx.reference?.toLowerCase().includes(q)
    );
  }

  if (type && type !== "All") {
    result = result.filter((tx) => tx.type.toLowerCase() === type.toLowerCase());
  }

  if (category && category !== "All") {
    result = result.filter((tx) => tx.category.toLowerCase() === category.toLowerCase());
  }

  if (sortBy === "date-desc") {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "date-asc") {
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortBy === "amount-desc") {
    result.sort((a, b) => b.amount - a.amount);
  } else if (sortBy === "amount-asc") {
    result.sort((a, b) => a.amount - b.amount);
  }

  return result;
}

export function calculateCategoryTotals(transactions = []) {
  const debits = transactions.filter((t) => t.type === "debit");
  const totalSpent = debits.reduce((acc, t) => acc + t.amount, 0) || 1;

  const categoryMap = {};
  debits.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  return Object.entries(categoryMap).map(([name, amount]) => ({
    name,
    amount,
    percentage: Math.round((amount / totalSpent) * 100),
  }));
}

export function calculateMonthlySpending(transactions = []) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyDebits = transactions.filter((t) => {
    const d = new Date(t.date);
    return t.type === "debit" && d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  return monthlyDebits.reduce((sum, t) => sum + t.amount, 0);
}
