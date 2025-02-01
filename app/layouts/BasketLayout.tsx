"use client";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useBasketStore } from "../store/index";

const BasketLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setBasket, setBaskedIsLoading } = useBasketStore();

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
        .then((data) => {
          setBasket(data);
        })
        .finally(() => setBaskedIsLoading(false));
    } else if (localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")!));
    }
  }, [session.data?.user?.email, setBaskedIsLoading, setBasket]);

  return <>{children}</>;
};

export default BasketLayout;
