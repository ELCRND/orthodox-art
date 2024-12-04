import { useEffect, useRef, useState } from "react";

export function useSlider(axis: "x" | "y", time: number, transition: number) {
  const slider = useRef<any>(null);
  // const [isLast, setIsLast] = useState(false);
  const [indicatorNum, setIndacatorNum] = useState(0);

  useEffect(() => {
    let slideNum = 0;
    let timer = setInterval(() => {
      if (slider.current) {
        if (slideNum === slider.current?.childNodes.length - 1) {
          slider.current.style.transition = "none";
          slideNum = 0;
          setIndacatorNum(0);
          // setIsLast(true);
        } else {
          slider.current.style.transition = `translate ${transition}ms ease`;
          slideNum += 1;
          setIndacatorNum((p) => (p += 1));
          // setIsLast(false);
        }

        axis === "x"
          ? (slider.current.style.translate = `-${
              (slider.current?.offsetWidth || 0) * slideNum
            }px 0`)
          : (slider.current.style.translate = `0 -${
              (slider.current?.offsetHeight || 0) * slideNum
            }px`);
      }
    }, time);

    return () => clearInterval(timer);
  }, []);

  return { ref: slider, indicatorNum };
}
