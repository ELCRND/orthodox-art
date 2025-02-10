"use client";
import { useEffect, useRef, useState } from "react";

import Products from "./products/Products";
import Filter from "./filter/Filter";

import { loadProductsByFilters } from "./utils/loadProductsByFilters";
import { loadMoreProducts } from "./utils/loadMoreProducts";

import { IProduct } from "@/types/index";

import styles from "./all.module.css";

const All = ({ data }: { data: IProduct[] }) => {
  const [products, setProducts] = useState<IProduct[]>(data);
  const [loading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [finished, setFinished] = useState(false);
  const ref = useRef(null);

  const handleLoadProductsByFilters = async (filters: string) => {
    setLoading(true);
    const newProducts = await loadProductsByFilters(filters);
    setProducts(newProducts);
    setFinished(false);
    setLoading(false);
  };

  const handleLoadMoreProducts = async (
    filters: string,
    start?: number,
    end?: number
  ) => {
    setLoading(true);
    const result = await loadMoreProducts(filters, start, end);

    if (result === "finished") {
      setFinished(true);
    } else {
      setProducts((p) => [...p, ...result]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const r = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting ? false : true);
      },
      {
        threshold: 0.9,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (r) observer.unobserve(r);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.anchor}></div>
      <Filter isSticky={isSticky} loadProducts={handleLoadProductsByFilters} />
      <Products
        products={products}
        loadProducts={handleLoadMoreProducts}
        loading={loading}
        finished={finished}
      />
    </div>
  );
};

export default All;
