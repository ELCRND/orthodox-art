import { useEffect, useRef, useState } from "react";

export const useSliderIndicators = () => {
  const [state, setState] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setState(+entry.target.id);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      ref.current.childNodes.forEach((el) => observer.observe(el as Element));
    }

    return () => {
      if (root) {
        root.childNodes.forEach((el) => observer.unobserve(el as Element));
      }
    };
  }, []);

  return {
    indicatorNum: state,
    ref,
  };
};
