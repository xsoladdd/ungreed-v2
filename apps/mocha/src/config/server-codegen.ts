import type { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_SECRET, GRAPHQL_URL } from "./res";
require("dotenv").config();

// const graphqlUrl = process.env.HASURA_GRAPHQL_ENDPOINT as string;
// const graphqlSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [GRAPHQL_URL]: {
      headers: {
        "x-hasura-admin-secret": GRAPHQL_SECRET,
      },
    },
  },
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/server.generated.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        // "typescript-react-apollo",
        "typescript-graphql-request",
      ],
      config: {
        // withHooks: true,
        // withMutationFn: true,
        // withRefetchFn: false,
        // withResultType: true,
        // withMutationOptionsType: true,
        // addDocBlocks: true,
        // optimizeDocumentNode: true,
        // pureMagicComment: true,
      },
    },
  },
};

export default config;
