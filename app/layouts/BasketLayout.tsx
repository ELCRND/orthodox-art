"use client";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext(null);

const BasketLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [basket, setBasket] = useState(null);
  const session = useSession();

  useEffect(() => {
    if (session.data?.user?.email) {
      fetch(`/api/basket`, {
        method: "POST",
        body: JSON.stringify({ email: session.data?.user?.email }),
      })
        .then((res) => {
          if (res.ok && res.status !== 400) {
            return res.json();
          }
          return null;
        })
        .then((data) => data && setBasket(data.products));
    }
  }, [session.data?.user?.email]);

  return (
    <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
  );
};

export default BasketLayout;
