import Image from "next/image";

import styles from "./bannerSlide.module.css";

type Props = {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
};

const BannerSlide = ({ ...product }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <b>{(product.price / 10).toLocaleString("ru")} Р</b>
      </div>

      <Image
        src={product.img}
        alt="cross"
        width={624}
        height={580}
        className={styles.productImg}
      />

      <Image
        src={"/main/bannerSlider/bg.png"}
        alt="cross"
        fill={true}
        sizes="100%"
        className={styles.bg}
      />
    </div>
  );
};

export default BannerSlide;
