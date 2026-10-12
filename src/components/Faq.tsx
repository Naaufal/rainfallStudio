"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { Plus, Minus } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative border-b border-[#2A2826] scroll-mt-20 bg-[#121110]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#A39E98] tracking-wider uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F7F4EE] tracking-tight uppercase">
            JAWABAN & KETENTUAN.
          </h2>
          
          <p className="font-serif italic text-sm sm:text-base text-[#A39E98] max-w-xl leading-relaxed">
            Panduan lengkap seputar pilihan framing portrait, ketentuan jatah revisi, alur pengerjaan 24 jam, serta pembayaran praktis via QRIS.
          </p>
        </div>

        {/* Clean Hairline Accordion List */}
        <div className="border-t border-[#2A2826] divide-y divide-[#2A2826]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  id={headerId}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-5 sm:py-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#C45439] group touch-manipulation"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-4">
                    <span className="font-serif italic text-sm text-[#C45439] shrink-0 font-medium">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-[#F7F4EE] group-hover:text-[#C45439] transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-7 h-7 shrink-0 border flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#C45439] text-[#FFFFFF] border-[#C45439]"
                        : "bg-[#1A1918] text-[#A39E98] border-[#2A2826] group-hover:border-[#C45439] group-hover:text-[#F7F4EE]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pb-6 pl-9 sm:pl-12 pr-4 font-sans text-xs sm:text-sm text-[#A39E98] leading-relaxed max-w-3xl"
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
