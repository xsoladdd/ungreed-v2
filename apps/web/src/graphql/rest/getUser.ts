import { getGqlString } from "@/lib/getGqlString";
import { GetUserDocument, GetUserQuery } from "../client.generated";
import { fetchRequest } from "./helper";

export const getUser = async (
  email: string
): Promise<GetUserQuery["users"][0]> => {
  if (!email) {
    throw new Error("No Session, EmailError ");
  }
  const query = getGqlString(GetUserDocument);
  const variables = {
    where: {
      email: {
        _eq: email,
      },
    },
  };
  const user = query && (await fetchRequest(query, variables));
  console.log(user);
  return user.data.users[0];
};
