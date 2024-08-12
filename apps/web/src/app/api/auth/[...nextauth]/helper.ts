import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import { getPublicUser } from "@/graphql/rest/getPublicUser";
import { upsertUser } from "@/graphql/rest/upsertUser";
import jwt from "jwt-simple";
import { generateToken } from "@/lib/generateToken";
import { getUser } from "@/graphql/rest/getUser";
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
    async signIn({ user, account }) {
      if (!user.email) return "/auth/login?error=no_account";
      const publicUserData = await getPublicUser(user.email);
      const token = generateToken({
        id: publicUserData.id,
        name: publicUserData.email,
      });

      const user_x = await getUser(token);

      if (!user_x || (user_x && !user_x.user_profile)) {
        const newUser = await upsertUser(
          {
            email: user.email,
            user_profile: {
              data: {
                image: user.image,
                name: user.name,
              },
            },
          },
          token
        );

        if (!newUser) {
          return "/?error=registration_error";
        }
      }
      return true;
    },
    async session({ session, token, user }) {
      if (!session.user?.email) {
        return session;
      }
      // @ts-ignore
      if (session.accessToken) {
        console.log("toklen is here already");
      }
      const userDb = await getPublicUser(session.user?.email);

      // @ts-ignore
      session.accessToken = generateToken({
        id: userDb.id,
        name: userDb.email,
      });

      return session;
    },
  },
};
