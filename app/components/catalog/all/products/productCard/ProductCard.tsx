import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/types/index";

import styles from "./productCard.module.css";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.container}>
      <Image
        src={`/products/${product.type}/${product.image}`}
        alt={product.name}
        width={330}
        height={330}
      />
      <h2>{product.name}</h2>
      <b>{(product.price / 10).toLocaleString()} Р</b>
      <Link href={`/product/${product._id}`}>Подробнее</Link>
    </div>
  );
};

export default ProductCard;
