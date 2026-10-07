"use client";

import Image from "next/image";
import { useScrollY } from "@/hooks/useScrollY";
import { PortfolioItem } from "@/types";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroItems: PortfolioItem[];
}

export function Hero({ heroItems }: HeroProps) {
  const { scrollY } = useScrollY();

  // Responsive subtle parallax
  const parallaxOffset = Math.min(Math.max(scrollY * 0.09, -10), 65);

  const normalSample = heroItems.find((item) => item.style === "normal") || heroItems[0];
  const gtaSample = heroItems.find((item) => item.style === "gta") || heroItems[1] || heroItems[0];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#EDE8DD]/14 overflow-hidden">
      
      {/* Registration Cross Marks in corners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        
        {/* Mono Header Label */}
        <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase mb-4">
          NO. 00 — VECTOR ART PORTRAIT — BUATAN TANGAN
        </p>

        {/* Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start relative">
          
          {/* Left Column: Giant Headline & Actions */}
          <div className="lg:col-span-7 z-20 space-y-8 pr-0 lg:pr-6">
            
            {/* Giant Clamp Headline */}
            <h1 className="font-condensed font-black text-5xl sm:text-7xl lg:text-[7.5vw] leading-[0.88] tracking-tighter text-[#EDE8DD] uppercase">
              FOTOMU, <br />
              <span className="text-[#A3A8C3]">DIGARIS</span> <br />
              ULANG.
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg text-[#EDE8DD]/80 max-w-lg leading-relaxed">
              Tracing foto manual menjadi karya ilustrasi vektor. Pilih rasa estetik & lembut dari <strong className="text-[#E8A5A0] font-normal">Vector Normal</strong>, atau rasa kontras & tegas dari <strong className="text-[#E0B424] font-normal">GTA Style</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-2">
              <a
                href="#pesan"
                className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-sm px-8 py-4 uppercase tracking-wider text-center inline-flex items-center justify-center gap-3 border border-[#0D0C10]"
              >
                <span>BUAT PESANAN</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portofolio"
                className="font-mono text-xs tracking-widest text-[#EDE8DD] underline underline-offset-8 hover:text-[#A3A8C3] transition-colors py-2 text-center sm:text-left uppercase"
              >
                LIHAT PORTOFOLIO →
              </a>
            </div>

            {/* Single Mono Ticker Line */}
            <div className="pt-6 font-mono text-xs tracking-wider text-[#EDE8DD]/60 uppercase border-t border-[#EDE8DD]/14 flex flex-wrap items-center gap-3">
              <span>KURANG DARI 24 JAM</span>
              <span className="text-[#EDE8DD]/20">{"///"}</span>
              <span>REVISI 3X</span>
              <span className="text-[#EDE8DD]/20">{"///"}</span>
              <span>BAYAR VIA QRIS</span>
            </div>

          </div>

          {/* Right Column: Overlapping Flat Color Blocks & Bleeding Artwork */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 min-h-[420px] sm:min-h-[500px]">
            
            {/* Block 1: Flat Periwinkle Block with Bleeding Normal Artwork */}
            <div
              className="absolute right-0 top-0 w-[78%] sm:w-[70%] lg:w-[85%] aspect-[3/4] bg-[#A3A8C3] border border-[#0D0C10] shadow-2xl p-2 z-10"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
              }}
            >
              <div className="relative w-full h-full bg-[#0D0C10] overflow-hidden">
                <Image
                  src={normalSample?.src || "/portfolio/normal-01.jpg"}
                  alt={normalSample?.alt || "Sample Normal"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-[#0D0C10] text-[#EDE8DD] font-mono text-[10px] tracking-widest px-2 py-1 uppercase border border-[#EDE8DD]/20">
                STYLE 01 — NORMAL
              </div>
            </div>

            {/* Block 2: Offset Mustard/Mauve Block with GTA Artwork */}
            <div
              className="absolute left-0 bottom-0 w-[65%] sm:w-[58%] lg:w-[70%] aspect-[3/4] bg-[#E0B424] border border-[#0D0C10] shadow-2xl p-2 z-20"
              style={{
                transform: `translateY(${-parallaxOffset}px)`,
              }}
            >
              <div className="relative w-full h-full bg-[#0D0C10] overflow-hidden">
                <Image
                  src={gtaSample?.src || "/portfolio/gta-01.jpg"}
                  alt={gtaSample?.alt || "Sample GTA"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-[#0D0C10] text-[#E0B424] font-mono text-[10px] tracking-widest px-2 py-1 uppercase border border-[#E0B424]/40">
                STYLE 02 — GTA
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
