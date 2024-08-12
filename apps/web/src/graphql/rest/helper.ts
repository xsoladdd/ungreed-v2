import { GRAPHQL_URL } from "@/config/res";

export const fetchRequest = async (
  query: string,
  variables?: any,
  headers?: any
): Promise<any> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const request = new Request(GRAPHQL_URL, options);
  return await fetch(request).then((data) => data.json());
};
