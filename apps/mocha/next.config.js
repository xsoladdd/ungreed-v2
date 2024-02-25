/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  env: {
    NEXT_APP_HASURA_GRAPHQL_ENDPOINT: process.env.NEXT_APP_HASURA_GRAPHQL_ENDPOINT,
    NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET: process.env.NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET
  },
  // basePath:'/dashboard'
};
