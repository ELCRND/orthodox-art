import Image from "next/image";

const YandexBtn = ({ handleClick }: { handleClick: VoidFunction }) => {
  return (
    <button onClick={handleClick}>
      <span>
        <Image src={"/yandex.svg"} alt="yandex" width={22} height={22} />
      </span>
      <span>Continue with Yandex</span>
    </button>
  );
};

export default YandexBtn;
