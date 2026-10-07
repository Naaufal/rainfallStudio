"use client";

import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header & Disclaimer */}
        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#EDE8DD]/14 pb-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
              NO. 06 — ULASAN KLIEN
            </p>
            <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
              KATA MEREKA.
            </h2>
          </div>

          <span className="font-mono text-xs text-[#E0B424] tracking-widest uppercase">
            [ CONTOH TESTIMONI — DATA DUMMY ]
          </span>
        </div>

        {/* Typographic List (NO CARDS) */}
        <div className="space-y-16">
          {testimonials.map((item, idx) => (
            <div key={item.id} className="space-y-4 border-b border-[#EDE8DD]/14 pb-12 last:border-b-0">
              
              {/* Mono Author Metadata */}
              <div className="font-mono text-xs tracking-widest text-[#A3A8C3] uppercase flex items-center justify-between">
                <span>NO. 0{idx + 1} — {item.name.toUpperCase()} — {item.handle.toUpperCase()}</span>
                <span>[{item.style.toUpperCase()}]</span>
              </div>

              {/* Large Serif Quote */}
              <blockquote className="font-serif-italic font-normal text-2xl sm:text-4xl text-[#EDE8DD] leading-snug">
                &ldquo;{item.text}&rdquo;
              </blockquote>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
