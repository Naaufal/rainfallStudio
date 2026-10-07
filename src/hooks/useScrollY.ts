"use client";

import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY || window.pageYOffset;
          setScrollY(currentY);

          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? currentY / docHeight : 0;
          setScrollProgress(Math.min(Math.max(progress, 0), 1));

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, scrollProgress };
}
