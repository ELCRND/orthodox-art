"use client";

import { useEffect, useRef, useState } from "react";
import GuaranteeIcon from "./GuaranteeIcon";
import HandmadeIcon from "./HandmadeIcon";
import UniquenessIcon from "./UniquenessIcon";

import styles from "./icons.module.css";

const Icons = () => {
  const [state, setState] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const r = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setState(+entry.target.id);
    });

    if (ref.current) {
      ref.current.childNodes.forEach((el) => observer.observe(el as Element));
    }

    return () => {
      if (r) r.childNodes.forEach((el) => observer.unobserve(el as Element));
    };
  }, []);
  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.icons}>
        <HandmadeIcon />
        <UniquenessIcon />
        <GuaranteeIcon />
      </div>

      <div className={styles.indicators}>
        {[0, 0, 0].map((_, idx) => (
          <span
            key={idx}
            className={`${idx === state && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Icons;
