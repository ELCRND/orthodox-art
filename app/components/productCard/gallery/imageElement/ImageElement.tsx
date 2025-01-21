import Image from "next/image";
// import styles from "./imageElement.module.css";

type Props = {
  el: string;
  handleClick: (el: string) => void;
};

const ImageElement = ({ el, handleClick }: Props) => {
  return (
    <Image
      src={el}
      alt={el.split(".")[0]}
      width={150}
      height={125}
      onClick={() => handleClick(el)}
    />
  );
};

export default ImageElement;
