import { authConfig } from "./authconfig";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
