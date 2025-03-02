"use client";
import Image from "next/image";
import { useSlider } from "@/app/hooks/useSlider";

const Slider = () => {
  const { slideIdex } = useSlider(6);
  return (
    <ol
      style={{
        translate: `-${slideIdex * 100}% 0`,
        transition: `${slideIdex ? "translate 600ms ease" : "none"}`,
      }}
    >
      <li>
        <Image src={"/main/life/life-1.png"} alt="" width={320} height={310} />
      </li>
      <li>
        <Image src={"/main/life/life-1.png"} alt="" width={320} height={310} />
      </li>
      <li>
        <Image src={"/main/life/life-3.png"} alt="" width={320} height={310} />
      </li>
      <li>
        <Image src={"/main/life/life-4.png"} alt="" width={320} height={310} />
      </li>
      <li>
        <Image src={"/main/life/life-4.png"} alt="" width={320} height={310} />
      </li>
      <li>
        <Image src={"/main/life/life-4.png"} alt="" width={320} height={310} />
      </li>
    </ol>
  );
};

export default Slider;
