import { IBasket } from "@/types/index";
import { create } from "zustand";

type BasketStore = {
  basket: IBasket[];
  basketIsLoading: boolean;
  setBasket: (newData: IBasket[]) => void;
  setBaskedIsLoading: (v: boolean) => void;
};

export const useBasketStore = create<BasketStore>()((set) => ({
  basket: [],
  basketIsLoading: false,
  setBasket: (v) => set(() => ({ basket: v })),
  setBaskedIsLoading: (v) => set(() => ({ basketIsLoading: v })),
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
