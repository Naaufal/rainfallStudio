"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/types";
import { Lightbox } from "./Lightbox";
import { useInView } from "@/hooks/useInView";
import { Maximize2 } from "lucide-react";

interface PortfolioProps {
  items: PortfolioItem[];
}

type FilterCategory = "all" | "headshot" | "half-body" | "full-body";

export function Portfolio({ items }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    return item.framing === activeFilter;
  });

  return (
    <section
      id="portofolio"
      ref={sectionRef}
      className="py-16 md:py-24 relative border-b border-[#2A2826] scroll-mt-20 bg-[#121110]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#2A2826]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs text-[#A39E98] tracking-wider uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
              <span>Arsip Karya Studio · Koleksi Terpilih</span>
            </div>
            
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F7F4EE] tracking-tight uppercase">
              KATALOG KARYA PILIHAN.
            </h2>
            
            <p className="font-serif italic text-sm sm:text-base text-[#A39E98] leading-relaxed">
              Kompilasi potret vektor buatan tangan. Dikerjakan garis demi garis dengan kedalaman semi-realistis dari foto kiriman pelanggan.
            </p>
          </div>

          {/* Refined Framing Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
              className={`px-3.5 py-2 transition-all font-medium uppercase tracking-wider text-[11px] border ${
                activeFilter === "all"
                  ? "bg-[#C45439] text-[#FFFFFF] border-[#C45439] shadow-sm font-semibold"
                  : "bg-[#1A1918] text-[#A39E98] border-[#2A2826] hover:text-[#F7F4EE] hover:border-[#3D3936]"
              }`}
            >
              Semua ({items.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("headshot")}
              aria-pressed={activeFilter === "headshot"}
              className={`px-3.5 py-2 transition-all font-medium uppercase tracking-wider text-[11px] border ${
                activeFilter === "headshot"
                  ? "bg-[#C45439] text-[#FFFFFF] border-[#C45439] shadow-sm font-semibold"
                  : "bg-[#1A1918] text-[#A39E98] border-[#2A2826] hover:text-[#F7F4EE] hover:border-[#3D3936]"
              }`}
            >
              Headshot
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("half-body")}
              aria-pressed={activeFilter === "half-body"}
              className={`px-3.5 py-2 transition-all font-medium uppercase tracking-wider text-[11px] border ${
                activeFilter === "half-body"
                  ? "bg-[#C45439] text-[#FFFFFF] border-[#C45439] shadow-sm font-semibold"
                  : "bg-[#1A1918] text-[#A39E98] border-[#2A2826] hover:text-[#F7F4EE] hover:border-[#3D3936]"
              }`}
            >
              Half Body
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("full-body")}
              aria-pressed={activeFilter === "full-body"}
              className={`px-3.5 py-2 transition-all font-medium uppercase tracking-wider text-[11px] border ${
                activeFilter === "full-body"
                  ? "bg-[#C45439] text-[#FFFFFF] border-[#C45439] shadow-sm font-semibold"
                  : "bg-[#1A1918] text-[#A39E98] border-[#2A2826] hover:text-[#F7F4EE] hover:border-[#3D3936]"
              }`}
            >
              Full Body
            </button>
          </div>
        </div>

        {/* Compact Exhibition Grid:
            - Desktop: 4 columns (~250-280px), 8 artworks visible at once in standard view!
            - Mobile: 2 columns with calibrated gap (10-12px)
            - Staggered entrance timing
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filteredItems.map((item, index) => {
            const isGta = item.style === "gta";
            const delayMs = (index % 4) * 70;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Buka pratinjau detail ${item.title}`}
                style={{
                  transitionDelay: `${delayMs}ms`,
                }}
                className={`group cursor-pointer bg-[#1A1918] border border-[#2A2826] hover:border-[#C45439]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#C45439] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Artwork Thumbnail Frame: disciplined aspect ratio preserving portrait face focus */}
                <div className="relative w-full aspect-[4/5] bg-[#121110] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 280px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Micro Index Plate in top corner */}
                  <div className="absolute top-2.5 left-2.5 bg-[#121110]/85 backdrop-blur-xs border border-[#2A2826] px-2 py-0.5 text-[10px] font-medium text-[#A39E98] tracking-wider uppercase">
                    Plat {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Hover Magnify Badge */}
                  <div className="absolute inset-0 bg-[#121110]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 bg-[#1A1918]/95 border border-[#C45439] text-[#F7F4EE] flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C45439]" />
                      <span>Perbesar</span>
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Plate */}
                <div className="p-3 bg-[#1A1918] border-t border-[#2A2826] flex items-center justify-between text-xs leading-snug">
                  <div className="truncate mr-2">
                    <h3 className="font-serif italic text-sm text-[#F7F4EE] group-hover:text-[#C45439] transition-colors truncate">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-[#A39E98] block mt-0.5">
                      {item.framingLabel}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 px-2 py-0.5 border text-[10px] font-semibold uppercase tracking-wider ${
                      isGta
                        ? "bg-[#242220] text-[#D4A359] border-[#D4A359]/30"
                        : "bg-[#242220] text-[#F7F4EE] border-[#2A2826]"
                    }`}
                  >
                    {isGta ? "GTA" : "Normal"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curatorial Subtext */}
        <div className="mt-8 pt-4 border-t border-[#2A2826] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A39E98]">
          <span className="font-serif italic">
            Menampilkan {filteredItems.length} karya asli buatan tangan Rainfall Studio.
          </span>
          <span className="text-[#C45439] font-medium">
            Ketuk gambar untuk melihat resolusi penuh & guratan detail.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(index) => setSelectedItem(filteredItems[index])}
      />
    </section>
  );
}
