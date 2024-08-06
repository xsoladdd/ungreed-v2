import { getGqlString } from "@/lib/getGqlString";
import { fetchRequest } from "./helper";
import {
  UpsertUserDocument,
  UpsertUserMutation,
  Users_Insert_Input,
} from "../client.generated";
export const upsertUser = async (
  props: Users_Insert_Input
): Promise<UpsertUserMutation["insert_users_one"]> => {
  if (!props.email) {
    throw new Error("No Session, EmailError ");
  }
  const query = getGqlString(UpsertUserDocument);
  const variables = {
    object: props,
  };

  const res = query && (await fetchRequest(query, variables));
  return res.data.insert_users_one;
};
