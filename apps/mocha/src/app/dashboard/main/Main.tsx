import React from "react";
import FilterCard from "./FilterCard";
import BalanceCard from "./BalanceCard";
// import MoneyTreeCard from "./MoneyTreeCard";
import EditCard from "./AddEditCard";
import LedgerCard from "./LedgerCard";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex gap-4 flex-col md:flex-row">{children}</div>;
};

const Main: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col">
      <Wrapper>
        <FilterCard />
        <BalanceCard />
      </Wrapper>
      <Wrapper>
        <LedgerCard />
        <EditCard />
      </Wrapper>
    </div>
  );
};
export default Main;
