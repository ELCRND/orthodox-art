"use client";
import GuaranteeIcon from "./GuaranteeIcon";
import HandmadeIcon from "./HandmadeIcon";
import UniquenessIcon from "./UniquenessIcon";

import { useSliderIndicators } from "@/app/hooks/useSliderIndicators";

import styles from "./icons.module.css";

const Icons = () => {
  const { indicatorNum, ref } = useSliderIndicators();

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
            className={`${idx === indicatorNum && styles.active}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Icons;
