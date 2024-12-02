import Image from "next/image";
import Link from "next/link";
import styles from "./bracelets.module.css";

const Bracelets = () => {
  return (
    <Link href={"/catalog#bracelets"} className={styles.container}>
      <span>Браслеты</span>
      <Image src={"/main/catalog/bracelets.jpg"} alt="bracelets" fill={true} />
    </Link>
  );
};

export default Bracelets;
