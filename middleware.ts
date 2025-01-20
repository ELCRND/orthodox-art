import { authConfig } from "./authconfig";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
