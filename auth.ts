//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import NextAuth from "next-auth";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import Google from "next-auth/providers/google";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import Yandex from "next-auth/providers/yandex";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import Credentials from "next-auth/providers/credentials";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { authConfig } from "./authconfig";
import { clientPromise, getDbAndReqBody } from "./utils/apiRoutes";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Yandex,
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        let user = null;
        const { db } = await getDbAndReqBody(clientPromise, null);

        user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordCorrect) return null;

        // console.log(user);

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, { databaseName: process.env.DB_NAME }),
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token }) {
      // if (account) {
      //   token = Object.assign({}, token, {
      //     access_token: account.access_token,
      //   });
      // }
      return token;
    },
    async session({ session }) {
      // console.log(token, "token");
      // if (session) {
      //   session = Object.assign({}, session, {
      //     access_token: token.access_token,
      //   });
      // }
      // console.log(session, "session");
      return session;
    },
  },
});
