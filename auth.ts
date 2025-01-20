// @ts-expect-error: Let's ignore a compile error like this unreachable code
import NextAuth from "next-auth";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import Google from "next-auth/providers/google";
import { authConfig } from "./authconfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google],
});
