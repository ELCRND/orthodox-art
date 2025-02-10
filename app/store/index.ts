import { IBasket } from "@/types/index";
import { create } from "zustand";

type BasketStore = {
  basket: IBasket[];
  fromDb: boolean;
  setBasket: (newData: IBasket[]) => void;
  setFromDb: (v: boolean) => void;
  basketIsLoading: boolean;
  setBaskedIsLoading: (v: boolean) => void;
  getCount: () => number;
  getTotal: () => number;
  getById: (id: string) => IBasket | undefined;
};

export const useBasketStore = create<BasketStore>()((set, get) => ({
  basket: [],
  fromDb: false,
  basketIsLoading: false,
  getCount: () => get().basket.length,
  getTotal: () =>
    get().basket.reduce(
      (total, product) => (total += product.count * (product.price / 10)),
      0
    ),
  setBasket: (v) => set(() => ({ basket: v })),
  setFromDb: (v) => set(() => ({ fromDb: v })),
  setBaskedIsLoading: (v) => set(() => ({ basketIsLoading: v })),
  getById: (id) => get().basket.find((el) => el._id === id),
}));

type ProductToBasket = {
  productToBasket: IBasket | null;
  productCount: number;
  productSize: string;
  setProductToBasket: (newData: IBasket) => void;
  setProductCount: (count: number) => void;
  setProductSize: (size: string) => void;
};

export const useProductToBasketStore = create<ProductToBasket>()((set) => ({
  productToBasket: null,
  productCount: 1,
  productSize: "",
  setProductToBasket: (v) => set(() => ({ productToBasket: v })),
  setProductCount: (c) => set(() => ({ productCount: c })),
  setProductSize: (s) => set(() => ({ productSize: s })),
}));
