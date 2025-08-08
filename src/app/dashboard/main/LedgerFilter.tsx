import TableFilter from "../Components/TableFilter/TableFilter";
import React from "react";
import { filterData } from "./helper";
import GenerateModal from "./GenerateModal";

const LedgerFilter = () => {
  return (
    <TableFilter
      data={filterData}
      hasSearch={false}
      buttons={<GenerateModal />}
    />
  );
};

export default LedgerFilter;
