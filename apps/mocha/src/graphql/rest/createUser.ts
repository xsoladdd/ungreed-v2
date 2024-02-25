import { getUser } from "./getUser";
import { TUser, fetchRequest } from "./helper";

export const createUser = async (email: string): Promise<TUser> => {
  if (!email) {
    throw new Error("No Session, EmailError ");
  }
  const query = `
  mutation createUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      email
      id
    }
  }
  `;
  const variables = {
    object: {
      email,
    },
  };

  const res = await fetchRequest(query, variables);
  return res.data.insert_users_one;
};
