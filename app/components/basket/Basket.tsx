"use client";
import { useBasketStore } from "@/app/store/index";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./basket.module.css";
import OrderModal from "./orderModal/OrderModal";
import ProductCard from "./productCard/ProductCard";

type Inputs = { [key: string]: string };

const Basket = () => {
  const [open, setOpen] = useState(false);

  const { basket, setBasket, setBaskedIsLoading, getTotal } = useBasketStore();
  const { data } = useSession();
  const { register, handleSubmit } = useForm<Inputs>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setOpen(true);
  };

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
    <div className={`${styles.container} ${open ? styles.scrollOff : ""}`}>
      {open && <OrderModal closeModal={() => setOpen(false)} />}
      <div className={styles.total}>
        <span>Итого: </span>
        <b>{getTotal().toLocaleString()}</b>
        <button form="basketForm">оформить заказ</button>
      </div>
      <form
        id="basketForm"
        className={styles.content}
        onSubmit={handleSubmit(onSubmit)}
      >
        {basket &&
          basket.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              deleteOneFromDb={deleteOneFromDb}
              register={register}
            />
          ))}
      </form>
    </div>
  );
};

export default Basket;
