"use client";

import PageLayoutHeader from "@/components/layout/PageLayoutHeader";
import FacetedFilter from "@/components/ui/FacetedFilter";
import { useFacetedFilter } from "@/components/ui/FacetedFilter/hook";
import { TableLoader } from "@/components/ui/Loader/TableLoader";
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
  InputMaybe,
  Ledger_Bool_Exp,
  Order_By,
  useGetLedgerListQuery,
} from "@/graphql/client.generated";
import { useZustand } from "@/store";
import TableRowData from "./TableRowData";
import usePagination from "@/components/ui/Pagination/usePagination";
import Pagination from "@/components/ui/Pagination";
import { useEffect } from "react";
import { months_options, year_options } from "../../main/helper";

const page: React.FC = () => {
  const { user, refetch: zRefetch } = useZustand();

  const {
    handleBack,
    handleNext,
    limit,
    offset,
    setOffset,
    setListSize,
    listSize,
  } = usePagination();

  const defaultWhere: InputMaybe<Ledger_Bool_Exp> = {
    user: {
      email: {
        _eq: user.email,
      },
    },
    is_deleted: {
      _eq: false,
    },
  };

  const { loading, data, error, refetch } = useGetLedgerListQuery({
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
    onCompleted: ({ ledger_aggregate }) => {
      if (ledger_aggregate.aggregate) {
        setListSize(ledger_aggregate.aggregate?.count ?? 0);
      }
    },
  });

  const monthFilter = useFacetedFilter();
  const yearFilter = useFacetedFilter();
  const cutoffFilter = useFacetedFilter();

  const handleFilterClick = () => {
    refetch({
      limit,
      offset,
      where: {
        cutoff: {
          _in:
            cutoffFilter.selectedValues?.length !== 0
              ? cutoffFilter.selectedValues
              : undefined,
        },
        month: {
          _in:
            monthFilter.selectedValues?.length !== 0
              ? monthFilter.selectedValues?.map((string) => parseInt(string))
              : undefined,
        },
        year: {
          _in:
            yearFilter.selectedValues?.length !== 0
              ? yearFilter.selectedValues?.map((string) => parseInt(string))
              : undefined,
        },
        ...defaultWhere,
      },
    });
  };
  const handleResetClick = () => {
    monthFilter.clearValues();
    yearFilter.clearValues();
    cutoffFilter.clearValues();
    refetch({
      limit,
      offset,
      where: {
        ...defaultWhere,
      },
    });
  };

  useEffect(() => {
    if (zRefetch.ledgerList === true) {
      refetch({
        limit,
        offset,
        where: {
          cutoff: {
            _in:
              cutoffFilter.selectedValues?.length !== 0
                ? cutoffFilter.selectedValues
                : undefined,
          },
          month: {
            _in:
              monthFilter.selectedValues?.length !== 0
                ? monthFilter.selectedValues?.map((string) => parseInt(string))
                : undefined,
          },
          year: {
            _in:
              yearFilter.selectedValues?.length !== 0
                ? yearFilter.selectedValues?.map((string) => parseInt(string))
                : undefined,
          },
          ...defaultWhere,
        },
      });
      zRefetch.setter("ledgerList", true);
    }

    return () => {};
  }, [zRefetch.ledgerList]);

  useEffect(() => {
    if (!loading) {
      refetch({
        limit,
        offset,
        where: {
          ...defaultWhere,
        },
      });
    }
    return () => {};
  }, []);

  const filterArea = (
    <div className="pb-4 flex gap-3 flex-col w-full md:flex-row">
      <div className="w-full flex justify-evenly md:justify-start md:gap-3">
        <FacetedFilter
          options={[
            ...months_options.map(({ text, value }) => ({
              label: text,
              value,
            })),
          ]}
          title="Month"
          {...monthFilter}
        />
        <FacetedFilter
          options={[
            ...year_options.map(({ text, value }) => ({
              label: text,
              value,
            })),
          ]}
          title="Year"
          {...yearFilter}
        />
        <FacetedFilter
          options={[
            { label: "First", value: "1st" },
            { label: "Second", value: "2nd" },
          ]}
          title="Cutoff"
          {...cutoffFilter}
        />
      </div>
      <div className="flex w-full gap-4 md:justify-end">
        <Button
          variant="secondary"
          size="sm"
          className="h-8 w-1/2 md:w-fit"
          onClick={handleFilterClick}
        >
          Filter
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-8 w-1/2 md:w-fit"
          onClick={handleResetClick}
        >
          Reset
        </Button>
      </div>
    </div>
  );
  const tableHead = (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">#</TableHead>
        <TableHead>Date Trench</TableHead>
        <TableHead className="text-right">Total Income</TableHead>
        <TableHead className="text-right">Total Expense</TableHead>
        <TableHead className="text-right">Total Balance</TableHead>
        <TableHead className="text-right w-[20px]"> </TableHead>
      </TableRow>
    </TableHeader>
  );
  const tableBody = (
    <TableBody>
      {loading && <TableLoader />}
      {!loading && error && <TableMessage>Something went wrong</TableMessage>}
      {!loading && data?.ledger.length === 0 && (
        <TableMessage>No Data Existing</TableMessage>
      )}
      {!loading &&
        data?.ledger.map((ledgerItem, i) => (
          <TableRowData
            key={i}
            item={ledgerItem}
            handleRefetch={handleFilterClick}
          />
        ))}
    </TableBody>
  );
  return (
    <>
      <PageLayoutHeader
        title="Ledger List"
        caption="List of ledger documents you have generated"
      />

      {filterArea}
      <Separator />
      <div className="">
        <Table>
          {tableHead}
          {tableBody}
        </Table>
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
      </div>
    </>
  );
};
export default page;
