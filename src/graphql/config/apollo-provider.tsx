"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/config/apollo-client";

export default function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
