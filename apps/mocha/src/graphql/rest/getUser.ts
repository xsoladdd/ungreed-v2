import { TUser, fetchRequest } from "./helper";

export const getUser = async (email: string): Promise<TUser> => {
  if (!email) {
    throw new Error("No Session, EmailError ");
  }
  const query = `
  query getUser($where: users_bool_exp) {
    users(where: $where) {
      id
      email
    }
  }
  `;
  const variables = {
    where: {
      email: {
        _eq: email,
      },
    },
  };
  const user = await fetchRequest(query, variables);
  return user.data.users[0];
};
