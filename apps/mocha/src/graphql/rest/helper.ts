import { GRAPHQL_SECRET, GRAPHQL_URL } from "@/config/res";

export const fetchRequest = async (
  query: string,
  variables?: any
): Promise<any> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": GRAPHQL_SECRET,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const request = new Request(GRAPHQL_URL, options);
  return await fetch(request).then((data) => data.json());
};

export type TUser = {
  id: string;
  email: string;
};
