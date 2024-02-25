import { GRAPHQL_SECRET, GRAPHQL_URL } from "@/config/res";

export const getUser = async (
  email: string
): Promise<{ id: string; email: string }> => {
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
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": GRAPHQL_SECRET,
    },
    body: JSON.stringify({
      query,
      variables: {
        where: {
          email: {
            _eq: email,
          },
        },
      },
    }),
  };
  const request = new Request(GRAPHQL_URL, options);
  const user = await fetch(request).then((data) => data.json());
  return user.data.users[0];
};
