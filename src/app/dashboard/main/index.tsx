import HeadingCaption from "../Components/HeadingCaption";
import LedgerPagination from "./LedgerPagination";
import LedgerTable from "./LedgerTable";
import LedgerFilter from "./LedgerFilter";

export default async function DashboardPage() {
  return (
    <div className="py-4 px-4">
      <HeadingCaption
        title="Dashboard"
        caption="Overview of your financial data"
      />
      <div className="px-6">
        <LedgerFilter />
      </div>
      <div className="px-6">
        <LedgerTable />
      </div>
      <div className="px-6   ">
        <LedgerPagination />
      </div>
    </div>
  );
}
