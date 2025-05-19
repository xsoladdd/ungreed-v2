import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_APP_HASURA_GRAPHQL_ENDPOINT:
      process.env.NEXT_APP_HASURA_GRAPHQL_ENDPOINT,
    NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET:
      process.env.NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
  },
};

export default nextConfig;
