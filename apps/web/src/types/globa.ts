import { User_Profile } from "@/graphql/client.generated";

export type SessionUser = {
  email: string;
  id: string;
  dbData?: Partial<User_Profile>;
};
