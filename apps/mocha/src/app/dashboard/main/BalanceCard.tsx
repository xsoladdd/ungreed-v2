import Card from "@/components/ui/Card";
import React from "react";

const BalanceCard: React.FC = () => {
  return (
    <Card
      title="Balance Information"
      // sub="Select filter to display data"
      className="w-full lg:w-3/12"
    >
      <ul className="list-none [&>li]:mt-2 text-sm font-semibold">
        <li>
          <span className="font-normal">Total Income : </span> 51,000
        </li>
        <li>
          <span className="font-normal">Total Expense : </span> 45,800
        </li>
        <li>
          <span className="font-normal">Total Balance : </span> N/A
        </li>
        <li>
          <span className="font-normal">After Expense : </span> 23,000
        </li>
      </ul>
    </Card>
  );
};
export default BalanceCard;
