import jwt from "jwt-simple";
export const generateToken = (f: { id: string; name: string }) => {
  const secret = process.env.JWT_SECRET!;
  const { id, name } = f;
  const payload = {
    sub: id,
    name: name,
    admin: false,
    iat: 1516239022,
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": id,
    },
  };
  const hasuraAuthToken = jwt.encode(payload, secret);
  return hasuraAuthToken;
};
