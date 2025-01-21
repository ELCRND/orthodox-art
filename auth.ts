// @ts-expect-error: Let's ignore a compile error like this unreachable code
import NextAuth, { AuthError } from "next-auth";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import Google from "next-auth/providers/google";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import Credentials from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { authConfig } from "./authconfig";
import { clientPromise, getDbAndReqBody } from "./utils/apiRoutes";
import bcrypt from "bcrypt";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { MongoDBAdapter } from "@auth/mongodb-adapter";

class InvalidLoginError extends AuthError {
  code = "invalid_credentials";
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      // @ts-expect-error: Let's ignore a compile error like this unreachable code
      authorize: async (credentials) => {
        let user = null;
        const { db } = await getDbAndReqBody(clientPromise, null);

        user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) throw new Error("Invalid credentials.");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordCorrect)
          throw new InvalidLoginError("e.response?.data?.message");

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, { databaseName: process.env.DB_NAME }),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
