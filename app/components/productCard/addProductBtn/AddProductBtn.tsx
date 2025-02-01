import { useBasketStore, useProductToBasketStore } from "@/app/store/index";
import { IProduct } from "@/types/index";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const AddProductBtn = ({ product }: { product: IProduct }) => {
  const { data } = useSession();
  const { basket, setBasket, basketIsLoading, setBaskedIsLoading } =
    useBasketStore();
  const { productCount, productSize } = useProductToBasketStore();

  const inBasket = () => basket?.find((el) => el._id === product._id);

  const inBasketAndEqualCountAndSize = () =>
    basket.find(
      (el) =>
        el._id === product._id &&
        el.count == productCount &&
        el.currentSize == productSize
    );

  const addOneInDb = async () => {
    setBaskedIsLoading(true);
    const res = await fetch("/api/basket/addOne", {
      method: "POST",
      body: JSON.stringify({
        email: data?.user?.email,
        product: {
          id: product._id,
          count: productCount,
          size: productSize,
        },
      }),
    });
    if (!res.ok) return;

    setBasket([
      ...basket,
      { ...product, count: productCount, currentSize: productSize || "" },
    ]);
    toast(`Продукт добавлен в корзину ${data?.user?.email}`);
    setBaskedIsLoading(false);
  };

  const updateOneInDb = async () => {
    setBaskedIsLoading(true);
    const prevState = structuredClone(basket);

    setBasket(
      basket.map((el) =>
        el._id === product._id ? { ...el, count: productCount } : el
      )
    );
    const updateData = await fetch("/api/basket/updateOne", {
      method: "POST",
      body: JSON.stringify({
        email: data?.user?.email,
        id: product._id,
        count: productCount,
        size: productSize,
      }),
    });

    if (!updateData.ok || updateData.status === 500) {
      setBasket(prevState);
      toast(`${(await updateData.json()).message}`);
      setBaskedIsLoading(false);
    }

    toast(`Данные товара обновлены`);
    setBaskedIsLoading(false);
  };

  const addOneInLS = () => {
    const updatedBasket = [
      ...basket,
      { ...product, count: productCount, currentSize: productSize },
    ];

    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    toast("Продукт добавлен в корзину гостя");
  };

  const updateOneInLS = () => {
    const updatedBasket = basket.map((el) =>
      el._id === product._id ? { ...el, count: productCount } : el
    );
    setBasket(updatedBasket);

    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    toast("Продукт обновлен");
  };

  return (
    <button
      disabled={
        Boolean(inBasketAndEqualCountAndSize()) ||
        !productCount ||
        !productSize ||
        basketIsLoading
      }
      onClick={() => {
        if (data?.user?.email) {
          if (inBasket()) updateOneInDb();
          else addOneInDb();
        } else {
          if (inBasket()) updateOneInLS();
          else addOneInLS();
        }
      }}
    >
      {inBasketAndEqualCountAndSize()
        ? "Добавлено"
        : inBasket()
        ? "Обновить"
        : "В корзину"}
    </button>
  );
};

export default AddProductBtn;
