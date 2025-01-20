"use client";
import { useEffect, useRef, useState } from "react";
import Filter from "./filter/Filter";
import Products from "./products/Products";

import styles from "./all.module.css";
import { IProduct } from "@/types/index";
import { toast, Zoom } from "react-toastify";

const All = ({ data }: { data: IProduct[] }) => {
  const [products, setProducts] = useState<IProduct[]>(data);
  const [loading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [finished, setFinished] = useState(false);
  const ref = useRef(null);

  const loadProducts = async (filters: string) => {
    console.log(filters.toString());
    setLoading(true);
    try {
      const newData = await fetch(
        `/api/products/some?start=${0}&end=${5}&${filters.toString()}`
      );

      const newProducts = await newData.json();
      setProducts(newProducts);
      setFinished(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreProducts = async (
    filters: string,
    start?: number,
    end?: number
  ) => {
    setLoading(true);
    try {
      const updateData = await fetch(
        `/api/products/some?start=${start || 0}&end=${
          end || 5
        }&${filters.toString()}`
      );

      if (updateData.statusText === "finished") {
        toast(`Вы просмотрели все товары данного типа`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        });
        setFinished(true);
      } else {
        const newProducts = await updateData.json();
        setProducts((p) => [...p, ...newProducts]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
      <Filter isSticky={isSticky} loadProducts={loadProducts} />
      <Products
        products={products}
        loadProducts={loadMoreProducts}
        loading={loading}
        finished={finished}
      />
    </div>
  );
};

export default All;
