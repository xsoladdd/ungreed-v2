import { Transaction } from "@/graphql/client.generated";

const useCalculateTable = (): [
  (transactions: Transaction[]) => {
    totalExpense: number;
    totalIncome: number;
    totalBalance: number;
  },
] => {
  const calculate = (transactions: Transaction[]) => {
    const totalExpense = transactions
      .filter((transaction) => transaction.transaction_type === "-")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalIncome = transactions
      .filter((transaction) => transaction.transaction_type === "+")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalBalance = totalIncome - totalExpense;
    return {
      totalExpense,
      totalIncome,
      totalBalance,
    };
  };

  return [calculate];
};

export default useCalculateTable;
