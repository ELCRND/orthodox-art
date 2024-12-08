"use client";

import { useRef, useState } from "react";
import styles from "./video.module.css";

const Video = ({
  toggleAutoSlide,
}: {
  toggleAutoSlide: (() => void) | ((v: boolean) => void);
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    ref.current?.play();
    setIsPlay(true);
    toggleAutoSlide(false);
  };

  const handlePause = () => {
    setIsPlay(false);
    toggleAutoSlide(true);
  };

  return (
    <div className={styles.container}>
      <video
        width={320}
        height={310}
        ref={ref}
        controls={isPlay}
        onPause={handlePause}
        onPlay={() => setIsPlay(true)}
      >
        <source src={"/main/life/life-2.mp4"} type="video/mp4" />
      </video>
      <button
        type="button"
        className={`${isPlay && styles.hidden}`}
        onClick={handlePlay}
      >
        <svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9424 11.0775L2.22441 20.5086C1.86217 20.7577 1.36663 20.6659 1.11759 20.3037C1.02637 20.171 0.977539 20.0138 0.977539 19.8527L0.977539 0.990524C0.977539 0.550936 1.3339 0.19458 1.77348 0.19458C1.9345 0.19458 2.09173 0.243414 2.22441 0.334633L15.9424 9.76575C16.3046 10.0148 16.3964 10.5103 16.1474 10.8726C16.0922 10.9529 16.0227 11.0223 15.9424 11.0775Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Video;
