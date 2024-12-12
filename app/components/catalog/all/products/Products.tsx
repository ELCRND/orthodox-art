import { IProduct } from "../../../../../types";
import ProductCard from "./productCard/ProductCard";
import styles from "./products.module.css";

const Products = ({ data }: { data: IProduct[] }) => {
  return (
    <div className={styles.container}>
      {data.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
