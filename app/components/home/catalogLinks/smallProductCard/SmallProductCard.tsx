import Image from "next/image";

import styles from "./smallProductCard.module.css";

const SmallProductCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"/main/catalog/smallCard.png"}
        alt="crosses"
        width={222}
        height={222}
      />
      <b>34 000 Р</b>
    </div>
  );
};

export default SmallProductCard;
