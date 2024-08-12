import { GRAPHQL_URL, GRAPHQL_SECRET } from "./res";
import type { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

// const graphqlUrl = process.env.HASURA_GRAPHQL_ENDPOINT as string;
const graphqlSecret = process.env
  .NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [GRAPHQL_URL]: {
      headers: {
        "x-hasura-admin-secret": graphqlSecret,
      },
    },
  },
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/client.generated.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        // "typescript-graphql-request",
      ],
      config: {
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: false,
        withResultType: true,
        withMutationOptionsType: true,
        addDocBlocks: true,
        optimizeDocumentNode: true,
        pureMagicComment: true,
      },
    },
  },
};

export default config;
