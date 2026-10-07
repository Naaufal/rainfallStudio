"use client";

import { useScrollY } from "@/hooks/useScrollY";

export function ScrollProgress() {
  const { scrollProgress } = useScrollY();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-[#16151B]"
    >
      <div
        className="h-full bg-[#EDE8DD]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: "left",
          willChange: "transform",
        }}
      />
    </div>
  );
}
