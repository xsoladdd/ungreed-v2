import { getGqlString } from "@/lib/getGqlString";
import { GetUserQuery } from "../client.generated";
import { fetchRequest } from "./helper";
import { gql } from "@apollo/client";

export const getPublicUser = async (
  email: string
): Promise<GetUserQuery["users"][0]> => {
  if (!email) {
    throw new Error("No email ");
  }

  const f = gql`
    query getUser {
      users {
        email
        id
      }
    }
  `;
  const query = getGqlString(f);
  const user =
    query && (await fetchRequest(query, {}, { "x-hasura-user-email": email }));
  return user.data.users[0];
};
