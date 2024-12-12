import { IProduct } from "@/types/index";
import Image from "next/image";

import styles from "./productCard.module.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.container}>
      <Image
        src={`/products/${product.type}/${product.image}`}
        alt={product.name}
        width={155}
        height={266}
      />
      <h2>{product.name}</h2>
      <b>{product.price}</b>
    </div>
  );
};

export default ProductCard;