import Image from "next/image";
import Link from "next/link";
import styles from "./chains.module.css";

const Chains = () => {
  return (
    <Link href={"/catalog#chains"} className={styles.container}>
      <span>Шнурки и цепи</span>
      <Image
        src={"/main/catalog/chains.jpg"}
        alt="chains"
        fill={true}
        sizes="100%"
      />
    </Link>
  );
};

export default Chains;
