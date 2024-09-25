import PageLayoutHeader from "@/components/PageHeader";
import TDTable from "./Table/TDTable";

const TransactionDefaultList: React.FC = () => {
  return (
    <div>
      <PageLayoutHeader
        title="Transaction Defaults"
        caption="Transaction Defaults are what populates your ledger when you're generating them."
      />
      <TDTable />
    </div>
  );
};
export default TransactionDefaultList;
