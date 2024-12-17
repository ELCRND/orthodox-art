"use client";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./productCard/ProductCard";
import { IProduct } from "../../../../../types";

import styles from "./products.module.css";

const Products = ({ data }: { data: IProduct[] }) => {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [countProducts, setCountProducts] = useState(data.length);
  const searchParams = useSearchParams();

  const getQuery = () => [...searchParams.values()].toString();
  const queries = getQuery();

  const filterProducts = useCallback(() => {
    const queries = Object.fromEntries(searchParams.entries());
    setFilteredProducts(
      products.filter((product) => {
        const stock = queries?.available === "stock" ? true : false;
        const type =
          queries?.category === "all" ? product.type : queries.category;
        const material =
          queries?.material === "any"
            ? product.material
            : queries?.material || product.material;

        return (
          product.stock === stock &&
          product.type === type &&
          product.material === material
        );
      })
    );
  }, [products, searchParams]);

  useEffect(() => {
    filterProducts();
  }, [queries, products.length, filterProducts]);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const updateData = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/products/some?start=${countProducts}&end=${countProducts + 11}`,
        {
          headers: {
            id: "123",
          },
        }
      );
      setProducts([...products, ...(await updateData.json())]);
      setCountProducts((p) => p + 12);
      // filterProducts();
      if (updateData.statusText === "finished") {
        setFinished(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        disabled={loading || finished}
        className={`${loading ? styles.loading : ""} ${
          finished ? styles.finished : ""
        }`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_126_174)">
            <path
              d="M0.77 15C0.541 15 0.335 14.842 0.283 14.61C0.095 13.778 0 12.9 0 12C0 5.383 5.383 0 12 0C15.8 0 19.409 1.83 21.653 4.895C21.816 5.118 21.768 5.431 21.545 5.594C21.322 5.758 21.009 5.708 20.846 5.486C18.79 2.677 15.482 1 12 1C5.935 1 1 5.935 1 12C1 12.827 1.087 13.631 1.258 14.39C1.319 14.66 1.15 14.927 0.88 14.988C0.843 14.996 0.806 15 0.77 15Z"
              fill="#1E252C"
            />
            <path
              d="M12.0002 24C8.17125 24 4.54625 22.147 2.30525 19.043C2.14325 18.819 2.19425 18.506 2.41725 18.345C2.64225 18.182 2.95325 18.233 3.11525 18.457C5.17025 21.302 8.49125 23 12.0002 23C18.0652 23 23.0002 18.065 23.0002 12C23.0002 11.162 22.9112 10.359 22.7342 9.61604C22.6702 9.34704 22.8362 9.07704 23.1052 9.01404C23.3762 8.94904 23.6442 9.11604 23.7072 9.38504C23.9012 10.204 24.0002 11.084 24.0002 12C24.0002 18.617 18.6172 24 12.0002 24Z"
              fill="#1E252C"
            />
            <path
              d="M2.55001 24C2.27601 24 2.05301 23.779 2.05001 23.505L2.00001 18.505C1.99901 18.372 2.05101 18.243 2.14501 18.149C2.23901 18.053 2.36701 18 2.50001 18H7.50001C7.77601 18 8.00001 18.224 8.00001 18.5C8.00001 18.776 7.77601 19 7.50001 19H3.00501L3.05001 23.495C3.05301 23.771 2.83201 23.997 2.55501 24C2.55401 24 2.55201 24 2.55001 24Z"
              fill="#1E252C"
            />
            <path
              d="M21.5 6H16.5C16.224 6 16 5.776 16 5.5C16 5.224 16.224 5 16.5 5H21V0.5C21 0.224 21.224 0 21.5 0C21.776 0 22 0.224 22 0.5V5.5C22 5.776 21.776 6 21.5 6Z"
              fill="#1E252C"
            />
          </g>
          <defs>
            <clipPath id="clip0_126_174">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {loading ? "Подождите" : "Смотреть еще"}
      </button>
    </div>
  );
};

export default Products;
