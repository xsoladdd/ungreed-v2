import { GetUserQuery } from "@/graphql/client.generated";

export type SessionUser = {
  email: string;
  id: string;
  dbData?: GetUserQuery["users"][0]["user_profile"];
};
