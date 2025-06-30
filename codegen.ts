import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ["https://ungreed.hasura.app/v1/graphql"]: {
        headers: {
          "x-hasura-admin-secret":
            "jGLmIQ3g0KZ5FfUWVVXMMxzJKdjCmJU75afTXwdJcNGus0WDU3DegwSZ9egpeSuN",
        },
      },
    },
  ],
  documents: "src/**/*.{ts,tsx,graphql,gql}",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
  },
};

export default config;
