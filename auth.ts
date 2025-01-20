import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { authConfig } from "./authconfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google],
});
