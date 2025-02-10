import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

import OrderForm from "./orderForm/OrderForm";
import OrderList from "./orderList/OrderList";
import OrderPayment from "./orderPayment/OrderPayment";

import { useBasketStore } from "@/app/store";

import styles from "./orderModal.module.css";

const OrderModal = ({ closeModal }: { closeModal: VoidFunction }) => {
  const [loading, setLoading] = useState(false);
  const { getTotal } = useBasketStore();
  const router = useRouter();

  const handlePayment = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.shadow}></div>
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={closeModal}></button>
        <div className={styles.form}>
          <OrderForm handlePayment={handlePayment} />
        </div>
        <div className={styles.list}>
          <OrderList />
        </div>
        <div className={styles.payment}>
          <OrderPayment />
        </div>
        <button form="order" className={styles.submit} disabled={loading}>
          {loading ? "Wait..." : "оформить заказ"}
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
