"use client";

import Image from "next/image";
import { styles, StyleId, framings } from "@/data/site";
import { formatRupiah } from "@/lib/format";
import { PortfolioItem } from "@/types";
import { ArrowRight } from "lucide-react";

interface StyleCardsProps {
  portfolioItems: PortfolioItem[];
  onSelectStyle: (styleId: StyleId) => void;
}

export function StyleCards({ portfolioItems, onSelectStyle }: StyleCardsProps) {
  const minPrice = Math.min(...framings.map((f) => f.price));
  const formattedMinPrice = formatRupiah(minPrice);

  const getStyleCover = (styleId: StyleId) => {
    const item = portfolioItems.find((p) => p.style === styleId);
    return item ? item.src : styleId === "normal" ? "/portfolio/normal-01.jpg" : "/portfolio/gta-01.jpg";
  };

  return (
    <section id="gaya" className="relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Section Mono Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 flex items-center justify-between border-b border-[#EDE8DD]/14 font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
        <span>NO. 01 — PILIHAN GAYA</span>
        <span>2 TIPE KARAKTER</span>
      </div>

      {/* Two Full-Bleed Panels Layout (stacked on mobile, side-by-side flex on desktop) */}
      <div className="flex flex-col lg:flex-row min-h-[680px]">
        
        {/* Left Panel: Vector Normal (Mauve & Rose, Serif Italic) */}
        <div
          id="gaya-normal"
          className="flex-1 bg-[#4A3638] text-[#EDE8DD] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EDE8DD]/14 lg:hover:flex-[1.15] transition-all duration-300 group"
        >
          <div className="space-y-8">
            
            {/* Header info */}
            <div className="flex items-start justify-between font-mono text-xs tracking-widest text-[#E8A5A0]">
              <span>[ STYLE 01 ]</span>
              <span>MULAI {formattedMinPrice}</span>
            </div>

            {/* Giant Title */}
            <div>
              <span className="font-mono text-xs tracking-widest text-[#E8A5A0] block mb-1">
                HALUS, ESTETIK, DETAIL
              </span>
              <h2 className="font-serif-italic font-normal text-5xl sm:text-7xl text-[#EDE8DD]">
                Vector Normal
              </h2>
            </div>

            {/* Large Artwork Frame */}
            <div className="relative w-full aspect-[3/4] bg-[#0D0C10] border border-[#EDE8DD]/20 overflow-hidden shadow-2xl">
              <Image
                src={getStyleCover("normal")}
                alt="Contoh Vector Normal"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="font-sans text-base text-[#EDE8DD]/90 leading-relaxed max-w-md">
              {styles.find((s) => s.id === "normal")?.description}
            </p>

            {/* Typed List for Best For */}
            <div className="space-y-2 pt-2 border-t border-[#EDE8DD]/14 font-mono text-xs tracking-wider">
              <span className="text-[#E8A5A0] block uppercase">COCOK UNTUK:</span>
              <ul className="space-y-1 text-[#EDE8DD]/80">
                {styles
                  .find((s) => s.id === "normal")
                  ?.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span>—</span>
                      <span>{item.toUpperCase()}</span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>

          {/* Button */}
          <div className="pt-10">
            <button
              type="button"
              onClick={() => onSelectStyle("normal")}
              className="btn-poster bg-[#E8A5A0] text-[#0D0C10] font-mono font-bold text-xs px-6 py-4 uppercase tracking-wider w-full flex items-center justify-between border border-[#0D0C10]"
            >
              <span>PILIH GAYA NORMAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Panel: GTA Style (Mustard & Ink, Condensed Uppercase) */}
        <div
          id="gaya-gta"
          className="flex-1 bg-[#E0B424] text-[#0D0C10] p-8 sm:p-12 lg:p-16 flex flex-col justify-between lg:hover:flex-[1.15] transition-all duration-300 group"
        >
          <div className="space-y-8">
            
            {/* Header info */}
            <div className="flex items-start justify-between font-mono text-xs tracking-widest text-[#0D0C10]/80">
              <span>[ STYLE 02 ]</span>
              <span>MULAI {formattedMinPrice}</span>
            </div>

            {/* Giant Title */}
            <div>
              <span className="font-mono text-xs tracking-widest text-[#0D0C10]/70 block mb-1">
                TEGAS, KONTRAS, DRAMATIS
              </span>
              <h2 className="font-condensed font-black text-6xl sm:text-8xl tracking-tight text-[#0D0C10] uppercase leading-none">
                GTA STYLE
              </h2>
            </div>

            {/* Large Artwork Frame */}
            <div className="relative w-full aspect-[3/4] bg-[#0D0C10] border-2 border-[#0D0C10] shadow-[6px_6px_0_0_#0D0C10] overflow-hidden">
              <Image
                src={getStyleCover("gta")}
                alt="Contoh GTA Style"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="font-sans text-base text-[#0D0C10]/90 leading-relaxed font-semibold max-w-md">
              {styles.find((s) => s.id === "gta")?.description}
            </p>

            {/* Typed List for Best For */}
            <div className="space-y-2 pt-2 border-t border-[#0D0C10]/20 font-mono text-xs tracking-wider">
              <span className="text-[#0D0C10] font-bold block uppercase">COCOK UNTUK:</span>
              <ul className="space-y-1 text-[#0D0C10]/90 font-medium">
                {styles
                  .find((s) => s.id === "gta")
                  ?.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span>▸</span>
                      <span>{item.toUpperCase()}</span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>

          {/* Button */}
          <div className="pt-10">
            <button
              type="button"
              onClick={() => onSelectStyle("gta")}
              className="btn-poster-dark bg-[#0D0C10] text-[#E0B424] font-mono font-bold text-xs px-6 py-4 uppercase tracking-wider w-full flex items-center justify-between border border-[#0D0C10]"
            >
              <span>PILIH GAYA GTA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
