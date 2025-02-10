"use client";
import { toast, Zoom } from "react-toastify";

import styles from "./feedback.module.css";

const Feedback = () => {
  const notify = (m: string) =>
    toast.success(`Success ${m.replace(/[^\d]/g, "")}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });

  return (
    <div className={styles.container}>
      <h2>Вам все нравится, но остались сомнения?</h2>
      <span>Пожалуйста укажите свой номер телефона и мы свяжемся с вами</span>
      <form
        action={(e) => {
          notify(e.get("phone") as string);
        }}
      >
        <input
          name="phone"
          type="tel"
          required={true}
          placeholder="Ваш номер телефона"
        />
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default Feedback;
