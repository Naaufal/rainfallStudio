"use client";

import { useScrollY } from "@/hooks/useScrollY";

export function ScrollProgress() {
  const { scrollProgress } = useScrollY();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-[#121110]"
    >
      <div
        className="h-full bg-[#C45439]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: "left",
          willChange: "transform",
        }}
      />
    </div>
  );
}
