import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_SECRET, GRAPHQL_URL } from "@/config/res";
import { getSdk } from "@/graphql/server.generated";

export const authOptions: NextAuthOptions = {
  secret: "20140023",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const url = GRAPHQL_URL;
      const secret = GRAPHQL_SECRET;
      const client = new GraphQLClient(url, {
        headers: {
          connection: "keep-alive",
          "x-hasura-admin-secret": secret,
        },
      });
      const sdk = getSdk(client);
      console.log("sdk", sdk);
      console.log("sdk", { user });
      // const x = await sdk.insertUser({ email: "hello@gmail.com" });
      // console.log(x);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
    // async session({ session, user, token }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};
