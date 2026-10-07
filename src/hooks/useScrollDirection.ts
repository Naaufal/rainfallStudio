"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isPastThreshold, setIsPastThreshold] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY || window.pageYOffset;
    let ticking = false;
    const threshold = 80;
    const delta = 8; // movement threshold to avoid flickering

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      setIsPastThreshold(currentScrollY > threshold);

      if (Math.abs(currentScrollY - lastScrollY) >= delta) {
        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection("up");
        }
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDirection, isPastThreshold };
}
