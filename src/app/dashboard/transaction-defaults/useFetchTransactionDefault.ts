import {
  Order_By,
  useGetDefaultLedgerTransactionsQuery,
} from "@/graphql/generated/graphql";
import { useGlobalStore } from "@/store/globalStore";
import { useSearchParams } from "next/navigation";

const limit = 10;
export const useFetchTransactionDefault = () => {
  const { user } = useGlobalStore();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const cutoff = searchParams.get("cutoff") || "all";

  const { data, loading, error } = useGetDefaultLedgerTransactionsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: limit,
      offset: (currentPage - 1) * limit,
      orderBy: [{ created_at: "desc" as Order_By }],
      user_Id: user?.id,
      where: {
        cutoff: { _eq: cutoff === "all" ? undefined : cutoff },
      },
    },
  });
  return { data, loading, error };
};
