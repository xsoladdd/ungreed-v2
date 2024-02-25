import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageLayoutHeader from "@/components/layout/PageLayoutHeader";
import Filter from "./Filter";
import LedgerCard from "./Table";

const Main: React.FC = () => {
  return (
    <PageLayout
      pageTitle="UNGREED."
      caption="Surpress your greed, control your expense"
      SideBar={<Filter />}
    >
      <LedgerCard />
    </PageLayout>
  );
};
export default Main;
