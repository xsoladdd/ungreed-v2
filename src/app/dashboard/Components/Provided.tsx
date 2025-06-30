"use client";
import ApolloProviderWrapper from "@/graphql/config/apollo-provider";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";

interface IProvidedProps {
  children: React.ReactNode;
}

const Provided: React.FC<IProvidedProps> = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
export default Provided;
