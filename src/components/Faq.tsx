"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-14 space-y-2">
          <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
            NO. 07 — PERTANYAAN UMUM
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
            FAQ.
          </h2>
        </div>

        {/* Plain List with Hairlines (NO BOXED ACCORDION CARDS) */}
        <div className="border-t border-[#EDE8DD]/14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-ans-${idx}`;
            const headerId = `faq-hdr-${idx}`;

            return (
              <div key={idx} className="border-b border-[#EDE8DD]/14">
                
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full text-left py-6 flex items-baseline justify-between gap-6 focus:outline-none group"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#EDE8DD]/40 tracking-widest shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif-normal text-xl sm:text-3xl text-[#EDE8DD] group-hover:text-[#A3A8C3] transition-colors">
                      {faq.q}
                    </h3>
                  </div>

                  {/* Square + / - Rotating Toggle */}
                  <div
                    className={`w-6 h-6 border border-[#EDE8DD]/60 flex items-center justify-center font-mono text-xs font-bold text-[#EDE8DD] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45 bg-[#EDE8DD] text-[#0D0C10]" : ""
                    }`}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pb-6 pl-9 sm:pl-12 font-sans text-sm sm:text-base text-[#EDE8DD]/70 leading-relaxed animate-fadeIn max-w-3xl"
                  >
                    {faq.a}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
