import { getGqlString } from "@/lib/getGqlString";
import { GetUserDocument, GetUserQuery } from "../client.generated";
import { fetchRequest } from "./helper";
export const getUser = async (
  token: string
): Promise<GetUserQuery["users"][0]> => {
  if (!token) {
    throw new Error("No token ");
  }

  const query = getGqlString(GetUserDocument);
  const user =
    query &&
    (await fetchRequest(query, {}, { authorization: `Bearer ${token}` }));
  return user.data.users[0];
};
