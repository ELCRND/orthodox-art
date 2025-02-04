import Image from "next/image";
import Link from "next/link";

import styles from "./largeProductCard.module.css";

const LargeProductCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/main/catalog/largeCard.png"}
        alt="crosses"
        width={430}
        height={365}
      />
      <Link href={"/product/675e9ed5fdee5ff6b2d4d37a"}>
        Крест из белого золота на шнурке
      </Link>
      <b>29 900 Р</b>
    </div>
  );
};

export default LargeProductCard;
