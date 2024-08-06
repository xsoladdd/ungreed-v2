import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { getUser } from "@/graphql/rest/getUser";
import { upsertUser } from "@/graphql/rest/upsertUser";

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

      if (!user_x || (user_x && !user_x.user_profile)) {
        const newUser = await upsertUser({
          email: user.email,
          user_profile: {
            data: {
              image: user.image,
              name: user.name,
            },
          },
        });
        if (!newUser) {
          return "/?error=registration_error";
        }
      }
      return true;
    },
  },
};
