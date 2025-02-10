"use client";
import ProductCard from "./productCard/ProductCard";

import { useCurrentSearchParams } from "@/app/hooks/useCurrentSearchParams";

import { IProduct } from "@/types";

import styles from "./products.module.css";
import Image from "next/image";

type Props = {
  products: IProduct[];
  loadProducts: (
    filters: string,
    start?: number,
    end?: number
  ) => Promise<void>;
  loading: boolean;
  finished: boolean;
};

const Products = ({ products, loadProducts, loading, finished }: Props) => {
  const searchParams = useCurrentSearchParams();
  return (
    <div className={styles.container}>
      <div>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <button
        onClick={() =>
          loadProducts(
            searchParams.toString(),
            products.length,
            products.length + 7
          )
        }
        disabled={loading || finished}
        className={`${loading ? styles.loading : ""} ${
          finished ? styles.finished : ""
        }`}
      >
        <Image src={"/loader.png"} alt="" width={20} height={20} />
        {loading ? "Подождите" : "Смотреть еще"}
      </button>
    </div>
  );
};

export default Products;
