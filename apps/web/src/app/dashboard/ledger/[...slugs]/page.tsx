"use client";
import PageLayoutHeader from "@/components/PageHeader";
import { useBreadcrumbsTitle } from "../../Components/layout/Breadcrumbs/useBreadcrumbsContext";
import {} from "next/dynamic";
import LedgerTable from "./Components/LedgerTable";
import { useGetLedgerListQuery } from "@/graphql/client.generated";

const page = ({ params }: { params: { slugs: string[] } }) => {
  useBreadcrumbsTitle(
    params.slugs.length === 1
      ? `Ledger: ${params.slugs[0]}`
      : `Compare: ${params.slugs.join(", ")}`,
    2
  );

  const { loading, data } = useGetLedgerListQuery({
    variables: {
      limit: 3,
      where: {
        _or: params.slugs.map((str, x) => {
          const [cutoff, month, year] = str.split("-");
          return {
            cutoff: {
              _eq: parseInt(cutoff as string) === 1 ? "1st" : "2nd",
            },
            year: {
              _eq: parseInt(year as string),
            },
            month: {
              _eq: parseInt(month as string),
            },
          };
        }),
      },
    },
  });

  return (
    <>
      <PageLayoutHeader
        title={
          params.slugs.length === 1
            ? "August 2024, 1st cutoff"
            : "Compare Ledgers"
        }
        caption={params.slugs.length === 1 ? `Ledger :${params.slugs[0]}` : ""}
      />
      <div className="overflow-x-auto flex gap-4 h-full">
        {data?.ledger.map((ledger) => {
          return (
            <LedgerTable
              loading={loading}
              key={ledger.id}
              row={ledger}
              tableControl={params.slugs.length === 1}
            />
          );
        })}
      </div>
    </>
  );
};
export default page;
