import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 767);
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("onload", handleResize);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("onload", handleResize);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return isWindowWide;
};
