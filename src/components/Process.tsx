"use client";

import { useState, useEffect, useRef } from "react";
import { steps, site } from "@/data/site";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionProgress, setSectionProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          // Progress 0 when top is at 85% of viewport, 1 when section top reaches 20%
          const start = vh * 0.85;
          const end = vh * 0.2;
          const raw = (start - rect.top) / (start - end);
          setSectionProgress(Math.min(Math.max(raw, 0), 1));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dashOffset = Math.round(1000 * (1 - sectionProgress));

  return (
    <section ref={sectionRef} id="cara-pesan" className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-16 space-y-2">
          <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
            NO. 04 — ALUR KERJA
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
            CARA PEMESANAN.
          </h2>
        </div>

        {/* Bezier Path Container for Desktop */}
        <div className="relative">
          
          {/* Animated SVG Bezier Path (Desktop) */}
          <svg
            aria-hidden="true"
            className="absolute top-12 left-0 right-0 w-full h-24 hidden lg:block pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 100"
            fill="none"
          >
            {/* Background Path */}
            <path
              d="M 50,50 Q 250,-10 500,50 T 950,50"
              stroke="rgba(237, 232, 221, 0.14)"
              strokeWidth="2"
            />
            {/* Scroll Animated Path */}
            <path
              d="M 50,50 Q 250,-10 500,50 T 950,50"
              stroke="#A3A8C3"
              strokeWidth="2.5"
              strokeDasharray="1000"
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 80ms ease-out" }}
            />
          </svg>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="bg-[#16151B] border border-[#EDE8DD]/14 p-6 flex flex-col justify-between space-y-6 relative"
              >
                {/* Square Anchor Point Mark */}
                <div className="w-3 h-3 bg-[#A3A8C3] border border-[#0D0C10] absolute -top-1.5 left-6" />

                <div className="space-y-4">
                  {/* Giant Outlined Numerals */}
                  <span className="font-condensed font-black text-6xl sm:text-7xl text-stroke text-[#EDE8DD]/30 block leading-none">
                    {step.num}
                  </span>

                  {/* Step Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-mono font-bold text-sm tracking-wider text-[#EDE8DD] uppercase">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-[#EDE8DD]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EDE8DD]/14 font-mono text-[10px] text-[#A3A8C3]">
                  {`// STEP 0${idx + 1}`}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 pt-6 border-t border-[#EDE8DD]/14 font-mono text-xs text-[#EDE8DD]/60 flex flex-wrap items-center justify-between gap-4 uppercase">
          <div>
            <span>ESTIMASI: </span>
            <span className="text-[#EDE8DD] font-bold">{site.turnaround.toUpperCase()}</span>
          </div>
          <div>
            <span>FORMAT: </span>
            <span className="text-[#EDE8DD] font-bold">{site.fileFormats.join(" & ")} HD</span>
          </div>
        </div>

      </div>
    </section>
  );
}
