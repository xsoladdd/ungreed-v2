"use client";
import PageLayoutHeader from "@/components/layout/PageLayoutHeader";
import FacetedFilter from "@/components/ui/FacetedFilter";
import { useFacetedFilter } from "@/components/ui/FacetedFilter/hook";
import { TableLoader } from "@/components/ui/Loader";
import Pagination from "@/components/ui/Pagination";
import usePagination from "@/components/ui/Pagination/usePagination";
import TableMessage from "@/components/ui/TableMessage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Default_Ledger_Transactions_Bool_Exp,
  InputMaybe,
  Order_By,
  useGetDefaultLedgerTransactionsQuery,
} from "@/graphql/client.generated";
import { useZustand } from "@/store";
import { useEffect, useId } from "react";
import AddEditModal from "./AddEditModal";
import TableRowData from "./TableRowData";
import useSearchParams from "@/hooks/useSearchParams";

const page: React.FC = () => {
  const {
    user,
    refetch: { defaultLedgerItems, setter },
    transactionDefault: { setData, data },
  } = useZustand();

  const {
    handleBack,
    handleNext,
    limit,
    offset,
    setOffset,
    setListSize,
    listSize,
  } = usePagination();

  const [activeId, setActiveId] = useSearchParams("editTransactionId");
  const cutoffFilter = useFacetedFilter();

  const defaultWhere: InputMaybe<Default_Ledger_Transactions_Bool_Exp> = {
    user: {
      email: {
        _eq: user.email,
      },
    },
    is_deleted: {
      _eq: false,
    },
  };

  const { loading, error, refetch } = useGetDefaultLedgerTransactionsQuery({
    variables: {
      limit,
      offset,
      orderBy: {
        created_at: Order_By.Asc,
      },
      where: {
        ...defaultWhere,
      },
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: ({
      default_ledger_transactions_aggregate,
      default_ledger_transactions,
    }) => {
      setData(default_ledger_transactions);
      setListSize(default_ledger_transactions_aggregate.aggregate?.count ?? 0);
    },
  });

  const handleRefetch = (withParams = false) => {
    refetch({
      limit,
      offset,
      where: {
        cutoff: withParams
          ? {
              _in:
                cutoffFilter.selectedValues?.length !== 0
                  ? cutoffFilter.selectedValues
                  : undefined,
            }
          : undefined,
        ...defaultWhere,
      },
    });
  };

  useEffect(() => {
    if (defaultLedgerItems === true) {
      handleRefetch(true);
      setter("defaultLedgerItems", false);
    }
    return () => {};
  }, [defaultLedgerItems]);

  const filterArea = (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="pb-4 flex gap-3 ">
        <FacetedFilter
          options={[
            { label: "First", value: "1st" },
            { label: "Second", value: "2nd" },
          ]}
          title="Cutoff"
          {...cutoffFilter}
        />
        <Button
          variant="secondary"
          size="sm"
          className="h-8"
          onClick={() => handleRefetch(true)}
        >
          Filter
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={() => {
            handleRefetch();
            cutoffFilter.clearValues();
          }}
        >
          Reset
        </Button>
      </div>
      <div className="pb-4 flex gap-3 ">
        <Button className="h-8" size="sm" onClick={() => setActiveId("new")}>
          Add Record
        </Button>
      </div>
    </div>
  );

  const tableHead = (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">#</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="w-[100px]">Cutoff</TableHead>
        <TableHead className="w-[120px]">Type</TableHead>
        <TableHead className="text-right w-[100px]">Amount</TableHead>
        <TableHead className="text-right w-[20px]"> </TableHead>
      </TableRow>
    </TableHeader>
  );

  const tableBody = (
    <TableBody>
      {loading && <TableLoader />}
      {!loading && error && <TableMessage>Something went wrong</TableMessage>}
      {(!loading && data !== undefined) ||
        (data && data.length !== 0 && (
          <TableMessage>No Data Existing</TableMessage>
        ))}
      {!loading &&
        data &&
        data.map((x, i) => (
          <TableRowData
            item={x}
            key={i}

            // handleRefetch={handleRefetch}
          />
        ))}
    </TableBody>
  );

  const pagination = (
    <div className="float-right">
      <Pagination
        handleBack={handleBack}
        handleNext={handleNext}
        loading={loading}
        listSize={listSize}
        setOffset={setOffset}
        offset={offset}
        limit={limit}
      />
    </div>
  );

  return (
    <>
      <PageLayoutHeader
        title="Transaction Defaults"
        caption="List of default transactions for generating ledgers"
      />
      {filterArea}
      <Separator />

      <AddEditModal status={!!activeId} setStatus={(b) => setActiveId()} />

      <div className="">
        <Table>
          {tableHead}
          {tableBody}
        </Table>
        {pagination}
      </div>
    </>
  );
};
export default page;
