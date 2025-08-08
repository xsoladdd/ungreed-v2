"use client";
import {
  GetLedgerListQuery,
  useGetLedgerListQuery,
} from "@/graphql/generated/graphql";
import { useParams, useSearchParams } from "next/navigation";
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
import AddEntryFormModal from "./AddEntryFormModal";
import { useState } from "react";
import EditEntryModalForm from "./EditEntryModalForm/EditEntryModalForm";
import { useEditFormStore } from "./EditEntryModalForm/useEditFormStore";

export default function LedgerPage() {
  const { ids } = useParams();
  const { user } = useGlobalStore();

  const [isEntryFormOpen, setIsEntryFormOpen] = useState(false);
  const { isOpen, setIsOpen, transaction, populateTransaction } =
    useEditFormStore();

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

      {!isMultipleDisplay && (
        <div className="pl-6">
          <TableFilter
            buttons={
              <>
                <AddEntryFormModal
                  isOpen={isEntryFormOpen}
                  setIsOpen={setIsEntryFormOpen}
                />
                <DropdownSettings />
              </>
            }
          />
        </div>
      )}

      <div className="px-6">
        {loading && <PageLoader />}
        <div
          className={clsx(
            `grid grid-cols-1  gap-4  `,
            isMultipleDisplay ? "md:grid-cols-2" : "md:grid-cols-1"
          )}
        >
          {<EditEntryModalForm />}
          {data?.ledger.map((ledger) => (
            <LedgerTransactionsTable
              key={ledger.id}
              ledger={ledger}
              showLabel={isMultipleDisplay}
              onTransactionClick={(transaction) => {
                populateTransaction(transaction);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
