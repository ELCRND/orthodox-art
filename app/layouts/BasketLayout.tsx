"use client";
import { useEffect } from "react";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { useSession } from "next-auth/react";
import { useBasketStore } from "../store/index";

const BasketLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setBasket, setBaskedIsLoading, setFromDb } = useBasketStore();
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
          setFromDb(true);
        })
        .finally(() => setBaskedIsLoading(false));
    } else if (localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")!));
      setFromDb(false);
    }
  }, [session.data?.user?.email, setBaskedIsLoading, setBasket, setFromDb]);

  return <>{children}</>;
};

export default BasketLayout;
