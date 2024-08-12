import { InputMaybe, Order_By } from "@/graphql/client.generated";

export type variableType<T, Y> = {
  limit: number;
  offset: number;
  orderBy: InputMaybe<Y | Y[]> | undefined;
  where: InputMaybe<T>;
};

type sessionType = {
  accessToken: string;
};
