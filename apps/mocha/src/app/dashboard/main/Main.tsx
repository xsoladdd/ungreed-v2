import React from "react";
import FilterCard from "./FilterCard";
import BalanceCard from "./BalanceCard";
// import MoneyTreeCard from "./MoneyTreeCard";
import EditCard from "./AddEditCard";
import LedgerCard from "./LedgerCard";
import LayoutWrapper from "@/components/ui/LayoutWrapper";

const Main: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col p-4">
      <LayoutWrapper>
        <FilterCard />
        <BalanceCard />
      </LayoutWrapper>
      <LayoutWrapper>
        <LedgerCard />
        <EditCard />
      </LayoutWrapper>
    </div>
  );
};
export default Main;
