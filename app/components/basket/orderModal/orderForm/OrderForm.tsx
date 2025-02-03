import { useForm } from "react-hook-form";
import styles from "./orderForm.module.css";

const OrderForm = () => {
  const { register } = useForm();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>КОНТАКТНЫЕ ДАННЫЕ </h2>
      <form id="order" className={styles.form}>
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
