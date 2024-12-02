import Image from "next/image";
import Link from "next/link";
import styles from "./crosses.module.css";

const Crosses = () => {
  return (
    <Link href={"/catalog#crosses"} className={styles.container}>
      <span>Кресты</span>
      <Image src={"/main/catalog/crosss.png"} alt="cross" fill={true} />
    </Link>
  );
};

export default Crosses;
