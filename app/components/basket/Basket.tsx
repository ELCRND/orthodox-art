"use client";
import { useBasketStore } from "@/app/store/index";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import styles from "./basket.module.css";
import ProductCard from "./productCard/ProductCard";

const Basket = () => {
  const { basket, setBasket, setBaskedIsLoading } = useBasketStore();
  const { data } = useSession();

  const deleteOneFromDb = async (id: string) => {
    setBaskedIsLoading(true);
    const res = await fetch("/api/basket/deleteOne", {
      method: "POST",
      body: JSON.stringify({
        email: data?.user?.email,
        id: id,
      }),
    });
    if (!res.ok) return;

    setBasket(basket.filter((p) => p._id !== id));
    toast(`Продукт удален из корзины ${data?.user?.email}`);
    setBaskedIsLoading(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {basket &&
          basket.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              deleteOneFromDb={deleteOneFromDb}
            />
          ))}
      </div>
    </div>
  );
};

export default Basket;
