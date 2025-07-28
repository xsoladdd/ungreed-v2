import { Order_By, useGetLedgerListQuery } from "@/graphql/generated/graphql";
import { limit } from "./helper";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useGlobalStore } from "@/store/globalStore";

export const useFetchLedger = () => {
  const router = useRouter();
  const { user } = useGlobalStore();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const year = searchParams.get("year") || new Date().getFullYear().toString();

  const month = searchParams.get("month") || undefined;

  const { data, loading, error } = useGetLedgerListQuery({
    variables: {
      limit: limit,
      offset: (currentPage - 1) * limit,
      orderBy: [{ created_at: "desc" as Order_By }],
      where: {
        year: { _eq: year === "all" ? undefined : parseInt(year, 10) },
        month: {
          _eq:
            month === "all"
              ? undefined
              : month
              ? parseInt(month, 10)
              : undefined,
        },
        user_id: { _eq: user?.id },
      },
    },
  });

  return { data, loading, error };
};
