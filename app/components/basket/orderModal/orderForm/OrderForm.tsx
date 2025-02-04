import { useBasketStore } from "@/app/store/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import styles from "./orderForm.module.css";

const OrderForm = () => {
  const { getTotal } = useBasketStore();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const handlePayment = async () => {
    try {
      const response = await axios.post("/api/payment", {
        amount: getTotal(), // Сумма платежа
        currency: "RUB", // Валюта
        description: "Оплата заказа", // Описание платежа
      });

      if (response.data.confirmation.confirmation_url) {
        router.push(response.data.confirmation.confirmation_url);
      } else {
        toast("Что то пошло не так");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>КОНТАКТНЫЕ ДАННЫЕ </h2>
      <form
        id="order"
        onSubmit={handleSubmit(handlePayment)}
        className={styles.form}
      >
        <input
          type="text"
          required
          {...register("firstName")}
          placeholder={"Ваше Имя"}
        />
        <input
          type="text"
          required
          {...register("lastName")}
          placeholder={"Ваша Фамилия"}
        />
        <input
          type="phone"
          required
          {...register("phone")}
          placeholder={"+7 (999) 808 65 48 "}
        />
        <input
          type="email"
          required
          {...register("email")}
          placeholder={"E-mail"}
        />
        <input
          type="text"
          required
          {...register("country")}
          placeholder={"Страна"}
        />
        <input
          type="text"
          required
          {...register("city")}
          placeholder={"Населённый пункт"}
        />
        <input
          type="text"
          required
          {...register("region")}
          placeholder={"Область/регион"}
        />
        <input
          type="text"
          required
          {...register("address")}
          placeholder={"Адрес"}
        />
      </form>
    </div>
  );
};

export default OrderForm;
