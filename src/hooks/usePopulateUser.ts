import { useGetMeQuery } from "@/graphql/generated/graphql";
import { useGlobalStore } from "@/store/globalStore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const usePopulateUser = () => {
  const { data: session } = useSession();
  const { setUser, user } = useGlobalStore();
  const { data, loading, error } = useGetMeQuery({
    skip: !session?.user?.email || !!user?.id,
    variables: {
      email: session?.user?.email,
    },
  });

  useEffect(() => {
    if (data?.users && data.users.length > 0) {
      console.log(`setting user`, data.users[0]);
      setUser(data.users[0]);
    }
  }, [data, loading]);

  return { data, loading, error };
};
