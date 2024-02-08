import React from "react";
import FilterCard from "./FilterCard";
import BalanceCard from "./BalanceCard";
import MoneyTreeCard from "./MoneyTreeCard";
import EditCard from "./AddEditCard";

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
        <MoneyTreeCard />
        <EditCard />
      </Wrapper>
    </div>
  );
};
export default Main;
