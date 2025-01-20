import { Metadata } from "next";
import Basket from "../components/basket/Basket";

const BasketPage = () => {
  return (
    <>
      <Basket />
    </>
  );
};

export default BasketPage;

export const metadata: Metadata = {
  title: "Корзина",
};
