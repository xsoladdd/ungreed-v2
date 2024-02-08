import { config } from "dotenv";

config();
export const CUTOFF_DAY = 15;
export const GRAPHQL_URL = process.env
  .NEXT_APP_HASURA_GRAPHQL_ENDPOINT as string;
export const GRAPHQL_SECRET = process.env
  .NEXT_APP_HASURA_GRAPHQL_ADMIN_SECRET as string;
