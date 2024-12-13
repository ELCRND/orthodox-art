"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./productCard/ProductCard";
import { IProduct } from "../../../../../types";

import styles from "./products.module.css";

const Products = ({ data }: { data: IProduct[] }) => {
  const [products, setProducts] = useState(data);
  const searchParams = useSearchParams();

  const getQuery = () => [...searchParams.values()].toString();

  // console.log([...searchParams.values()].toString());

  useEffect(() => {
    const queries = Object.fromEntries(searchParams.entries());
    setProducts(
      data.filter((product) => {
        const stock = queries?.available === "stock" ? true : false;
        const type =
          queries?.category === "all" ? product.type : queries.category;
        return product.stock === stock && product.type === type;
      })
    );
  }, [getQuery()]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
