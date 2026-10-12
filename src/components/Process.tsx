"use client";

import { processSteps } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function Process() {
  return (
    <section id="alur" className="py-16 md:py-24 relative border-b border-[#2A2826] scroll-mt-20 bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Split: Sticky Header on Left, Sequential Step Ledger on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Section Title & Workflow Note */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-5">
            <div className="flex items-center gap-2 text-xs text-[#A39E98] tracking-wider uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
              <span>Tahapan & Ketentuan Studio</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F7F4EE] tracking-tight uppercase leading-[1.05]">
              CARA PEMESANAN.
            </h2>
            
            <p className="font-serif italic text-sm sm:text-base text-[#A39E98] leading-relaxed">
              Tujuh langkah transparan dari pengiriman foto referensi hingga penyerahan karya akhir. Tidak ada sistem otomatisasi bot yang kaku — seluruh percakapan dilayani langsung oleh tim Rainfall Studio via WhatsApp.
            </p>

            <div className="pt-6 border-t border-[#2A2826] text-xs text-[#A39E98] space-y-3 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-[#C45439] font-bold">✓</span>
                <span>Estimasi pengerjaan 24 jam setelah detail disepakati</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#C45439] font-bold">✓</span>
                <span>Maksimal 3 kali revisi kecil (warna & garis)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#C45439] font-bold">✓</span>
                <span>Pembayaran aman & praktis melalui QRIS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Step Ledger */}
          <div className="lg:col-span-7 border-t border-[#2A2826] divide-y divide-[#2A2826]">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="py-6 sm:py-7 flex items-start gap-4 sm:gap-6 group hover:bg-[#1A1918]/60 transition-colors px-3 -mx-3"
              >
                {/* Step Number in Serif Italic */}
                <span className="font-serif italic text-xl sm:text-2xl text-[#C45439] shrink-0 pt-0.5 font-normal">
                  {step.num}
                </span>

                {/* Step Details */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F7F4EE] uppercase tracking-tight group-hover:text-[#C45439] transition-colors flex items-center gap-2">
                    <span>{step.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C45439]" />
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#A39E98] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
