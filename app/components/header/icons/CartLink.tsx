import { useBasketStore } from "@/app/store/index";
import Link from "next/link";
import styles from "./icons.module.css";

type Props = {
  handler?: () => void;
};

const CartLink = ({ handler }: Props) => {
  const { getCount } = useBasketStore();
  const count = getCount();
  return (
    <Link href={"/basket"} className={styles.cart} onClick={handler}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3_39)">
          <path
            d="M21.08 7.0001C20.9072 6.70072 20.6598 6.45123 20.3618 6.27597C20.0639 6.10071 19.7256 6.00566 19.38 6.0001H6.58L6 3.7401C5.9414 3.52194 5.81066 3.33004 5.62908 3.19567C5.44749 3.0613 5.22576 2.99236 5 3.0001H3C2.73478 3.0001 2.48043 3.10545 2.29289 3.29299C2.10536 3.48053 2 3.73488 2 4.0001C2 4.26531 2.10536 4.51967 2.29289 4.7072C2.48043 4.89474 2.73478 5.0001 3 5.0001H4.24L7 15.2601C7.0586 15.4783 7.18934 15.6702 7.37092 15.8045C7.55251 15.9389 7.77424 16.0078 8 16.0001H17C17.1847 15.9995 17.3656 15.9479 17.5227 15.8508C17.6798 15.7537 17.8069 15.615 17.89 15.4501L21.17 8.8901C21.3122 8.59211 21.3783 8.26357 21.3626 7.93378C21.3469 7.60399 21.2498 7.28323 21.08 7.0001ZM16.38 14.0001H8.76L7.13 8.0001H19.38L16.38 14.0001Z"
            fill="white"
          />
          <path
            d="M7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21Z"
            fill="white"
          />
          <path
            d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_39">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {count > 0 && <div>{count > 9 ? 9 + "+" : count}</div>}
    </Link>
  );
};

export default CartLink;
