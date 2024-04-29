"use client";

import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import Filter from "./Filter";
import LedgerCard from "./Table";
import AddEditTransaction from "./Modal/AddEditTransaction";
import useSearchParams from "@/hooks/useSearchParams";

const Main: React.FC = () => {
  const [activeId, setActiveId] = useSearchParams("editStatus");
  return (
    <PageLayout
      pageTitle="UNGREED."
      caption="Surpress your greed, control your expense"
      SideBar={<Filter />}
    >
      <LedgerCard />
      <AddEditTransaction
        setStatus={() => {
          setActiveId();
        }}
        status={!!activeId}
      />
    </PageLayout>
  );
};
export default Main;
