import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { getUser } from "@/graphql/rest/getUser";
import { createUser } from "@/graphql/rest/createUser";

export const authOption: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID!,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return "/auth/login?error=no_account";
      const user_x = await getUser(user.email);
      if (!user_x) {
        const newUser = await createUser(user.email);
        if (!newUser) {
          return "/?error=registration_error";
        }
      }
      return true;
    },
  },
};
