import { useCallback, useEffect, useRef, useState } from "react";

export function useSlider(
  quantSlides: number,
  autoSlideInterval?: number,
  timeoutAutoSlideInterval?: number
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const timeoutAutoSlideIntervalId = useRef<ReturnType<typeof setTimeout>>();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quantSlides);
  }, [quantSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quantSlides) % quantSlides);
  }, [quantSlides]);

  useEffect(() => {
    if (!isAutoSliding || !autoSlideInterval) return;

    const intervalId = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [isAutoSliding, nextSlide, autoSlideInterval]);

  const toggleAutoSlide = (v?: boolean) => {
    setIsAutoSliding((prev) => v || !prev);
  };

  const setSlideIndex = (n: number) => {
    setIsAutoSliding(false);
    setCurrentIndex(n);

    if (timeoutAutoSlideInterval) {
      clearTimeout(timeoutAutoSlideIntervalId.current);
      timeoutAutoSlideIntervalId.current = setTimeout(
        () => setIsAutoSliding(true),
        timeoutAutoSlideInterval
      );
    }
  };

  return {
    slideIdex: currentIndex,
    setSlideIndex,
    toPrev: prevSlide,
    toNext: nextSlide,
    toggleAutoSlide,
  };
}
