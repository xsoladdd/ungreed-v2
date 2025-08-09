import React, { Suspense } from "react";
import HeadingCaption from "../Components/HeadingCaption";
import TransactionDefaultFilter from "./TransactionDefaultFilter";
import TransactionDefaultTable from "./TransactionDefaultTable";
import TransactionDefaultPagination from "./TransactionDefaultPagination";
import AddEditTDModal from "./AddEditTDModal";

const TransactionDefaultsContent: React.FC = () => {
  return (
    <div className="py-4 px-4">
      <HeadingCaption
        title="Transaction Defaults"
        caption="Set default values for new transactions. These values will automatically populate when generating new entries."
      />
      <div className="px-6">
        <TransactionDefaultFilter />
      </div>
      <div className="px-6">
        <TransactionDefaultTable />
      </div>
      <div className="px-6   ">
        <TransactionDefaultPagination />
      </div>{" "}
      <AddEditTDModal />
    </div>
  );
};

const page: React.FC = () => {
  return <TransactionDefaultsContent />;
};

export default page;
