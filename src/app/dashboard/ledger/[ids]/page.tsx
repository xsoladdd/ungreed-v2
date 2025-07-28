"use client";
import { useGetLedgerListQuery } from "@/graphql/generated/graphql";
import { useParams } from "next/navigation";
import { useGlobalStore } from "@/store/globalStore";
import HeadingCaption from "../../Components/HeadingCaption";
import PageLoader from "../../Components/PageLoader";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import LedgerTransactionsTable from "../../Components/LedgerTransactionsTable/LedgerTransactionsTable";
import clsx from "clsx";
import { decodeIds } from "./helper";
import LedgerNavigation from "./LedgerNavigation";
import TableFilter from "../../Components/TableFilter";
import DropdownSettings from "./DropdownSettings";

export default function LedgerPage() {
  const { ids } = useParams();
  const { user } = useGlobalStore();
  // Decode URL parameter and split by comma to handle multiple IDs
  const idArray = decodeIds(ids as string);

  const { data, loading, error } = useGetLedgerListQuery({
    variables: {
      where: {
        id: { _in: idArray },
        user_id: { _eq: user?.id },
      },
    },
  });

  if (!loading) {
    console.log(data);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const isMultipleDisplay = data?.ledger && data?.ledger?.length > 1;

  return (
    <div className="py-4 px-4">
      <HeadingCaption
        title={
          loading ? (
            <Skeleton className="w-44 h-10 bt-2" />
          ) : isMultipleDisplay ? (
            `Multiple Ledgers`
          ) : (
            `${new Date(
              data?.ledger[0]?.year || 0,
              data?.ledger[0]?.month || 0
            ).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })} - ${data?.ledger[0]?.cutoff}`
          )
        }
        caption={
          loading ? (
            <Skeleton className="w-24 h-4 mt-2" />
          ) : isMultipleDisplay ? undefined : (
            `Here you can see the transactions for the selected period.`
          )
        }
        right={!isMultipleDisplay && <LedgerNavigation loading={loading} />}
      />

      <div className="px-6">
        <TableFilter
          buttons={
            <>
              <Button>Create a new entry</Button>
              <DropdownSettings />
            </>
          }
        />
      </div>

      <div className="px-6">
        {loading && <PageLoader />}
        <div
          className={clsx(
            `grid grid-cols-1  gap-4  `,
            isMultipleDisplay ? "md:grid-cols-2" : "md:grid-cols-1"
          )}
        >
          {data?.ledger.map((ledger) => (
            <LedgerTransactionsTable
              key={ledger.id}
              ledger={ledger}
              showLabel={isMultipleDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
