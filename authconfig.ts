export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login", // redirect & start
  },
  callbacks: {
    authorized: (credinals: any) => {
      const isLoggedIn = credinals.auth?.user;

      const isOnDashboard = credinals.request.nextUrl.pathname.startsWith("/");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(
          new URL("/dashboard", credinals.request.nextUrl)
        );
      }
      return true;
    },
  },
};
