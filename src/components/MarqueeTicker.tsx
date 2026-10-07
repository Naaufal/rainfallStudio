"use client";

export function MarqueeTicker() {
  const items = [
    "VECTOR NORMAL",
    "GTA STYLE",
    "HAND-TRACED PORTRAITS",
    "BEZIER PRECISION",
    "KURANG DARI 24 JAM",
    "3X REVISI",
    "QRIS PAYMENT",
    "HIGH RESOLUTION JPEG & PNG",
  ];

  return (
    <div
      aria-hidden="true"
      className="w-full bg-[#16151B] border-y border-[#EDE8DD]/14 py-3 overflow-hidden select-none relative z-20"
    >
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeScroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
      <div className="marquee-track flex items-center gap-10 font-mono text-xs tracking-widest text-[#EDE8DD]/80 uppercase">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-10 shrink-0">
            <span>{text}</span>
            <span className="text-[#A3A8C3]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
