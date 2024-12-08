import { useEffect, useRef, useState } from "react";

export function useSlider(
  axis: "x" | "y",
  interval: number,
  transition: number
) {
  const slider = useRef<HTMLUListElement>(null);
  let slideIndex = 0;
  const [indicatorNum, setIndacatorNum] = useState(0);

  const next = () => slideIndex++;

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (slider.current) {
        if (slideIndex === slider.current?.childNodes.length - 1) {
          slider.current.style.transition = "none";
          slideIndex = 0;
          setIndacatorNum(0);
        } else {
          slider.current.style.transition = `translate ${transition}ms ease`;
          next();
          setIndacatorNum((p) => (p += 1));
        }

        axis === "x"
          ? (slider.current.style.translate = `-${slideIndex * 100}% 0`)
          : (slider.current.style.translate = `0 -${slideIndex * 100}%`);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return { ref: slider, indicatorNum, next };
}
