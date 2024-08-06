"use client";
import { GRAPHQL_SECRET, GRAPHQL_URL } from "@/config/res";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": GRAPHQL_SECRET,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Provider client={client}>{children}</Provider>
    </>
  );
};
export default ApolloProvider;
