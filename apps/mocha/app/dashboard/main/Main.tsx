import React from "react";
import FilterCard from "./FilterCard";
import BalanceCard from "./BalanceCard";
import MoneyTreeCard from "./MoneyTreeCard";
const Main: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4 flex-col md:flex-row">
        <FilterCard />
        <BalanceCard />
      </div>
      <div className="">
        <MoneyTreeCard />
      </div>
    </div>
  );
};
export default Main;
