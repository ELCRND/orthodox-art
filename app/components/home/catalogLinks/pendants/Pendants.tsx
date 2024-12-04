import Image from "next/image";
import Link from "next/link";
import styles from "./pendants.module.css";

const Pendants = () => {
  return (
    <Link href={"/catalog#pendants"} className={styles.container}>
      <span>Подвески</span>
      <Image
        src={"/main/catalog/pendant.jpg"}
        alt="pendant"
        fill={true}
        sizes="100%"
      />
    </Link>
  );
};

export default Pendants;
