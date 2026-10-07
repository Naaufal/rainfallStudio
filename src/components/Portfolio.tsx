"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/types";
import { StyleId } from "@/data/site";
import { Lightbox } from "./Lightbox";

interface PortfolioProps {
  items: PortfolioItem[];
  onActiveStyleChange?: (style: StyleId | "all") => void;
}

export function Portfolio({ items, onActiveStyleChange }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<StyleId | "all">("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleFilterChange = (filter: StyleId | "all") => {
    setActiveFilter(filter);
    if (onActiveStyleChange) {
      onActiveStyleChange(filter);
    }
  };

  const filteredItems = items.filter(
    (item) => activeFilter === "all" || item.style === activeFilter
  );

  // Desktop cursor follower "LIHAT"
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="portofolio"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16"
    >
      {/* Desktop Floating "LIHAT" Cursor Label */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="fixed pointer-events-none z-40 hidden lg:block px-3 py-1 bg-[#EDE8DD] text-[#0D0C10] font-mono text-[10px] font-bold tracking-widest uppercase border border-[#0D0C10] transition-transform duration-75"
          style={{
            left: `${mousePos.x + 12}px`,
            top: `${mousePos.y + 12}px`,
          }}
        >
          [ LIHAT ]
        </div>
      )}

      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header & Filter Text Tabs with Sliding Underline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-[#EDE8DD]/14 pb-8">
          
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
              NO. 03 — GALERI HASIL KARYA
            </p>
            <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
              PORTOFOLIO TERPILIH.
            </h2>
          </div>

          {/* Filter Text Tabs */}
          <div className="flex items-center gap-6 font-mono text-xs tracking-widest">
            <button
              type="button"
              onClick={() => handleFilterChange("all")}
              aria-pressed={activeFilter === "all"}
              className={`relative py-2 uppercase transition-colors ${
                activeFilter === "all" ? "text-[#EDE8DD] font-bold" : "text-[#EDE8DD]/50 hover:text-[#EDE8DD]"
              }`}
            >
              SEMUA ({items.length})
              {activeFilter === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EDE8DD]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange("normal")}
              aria-pressed={activeFilter === "normal"}
              className={`relative py-2 uppercase transition-colors ${
                activeFilter === "normal" ? "text-[#E8A5A0] font-bold" : "text-[#EDE8DD]/50 hover:text-[#E8A5A0]"
              }`}
            >
              NORMAL
              {activeFilter === "normal" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8A5A0]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange("gta")}
              aria-pressed={activeFilter === "gta"}
              className={`relative py-2 uppercase transition-colors ${
                activeFilter === "gta" ? "text-[#E0B424] font-bold" : "text-[#EDE8DD]/50 hover:text-[#E0B424]"
              }`}
            >
              GTA STYLE
              {activeFilter === "gta" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E0B424]" />
              )}
            </button>
          </div>

        </div>

        {/* Irregular Editorial Grid (vaying column spans) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Editorial size distribution: 1st item spans 7 cols on desktop, 2nd spans 5 cols, others 4 cols
            const colSpanClass =
              index % 5 === 0
                ? "lg:col-span-7"
                : index % 5 === 1
                ? "lg:col-span-5"
                : "lg:col-span-4";

            const isNormal = item.style === "normal";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Lihat detail ${item.alt}`}
                className={`${colSpanClass} group cursor-pointer relative bg-[#16151B] border border-[#EDE8DD]/14 overflow-hidden flex flex-col justify-between text-left touch-manipulation w-full`}
              >
                {/* Artwork Box */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0D0C10]/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Mono Caption Bar */}
                <div className="p-4 bg-[#0D0C10] border-t border-[#EDE8DD]/14 flex items-center justify-between font-mono text-xs tracking-wider">
                  <span className="text-[#EDE8DD]/60">NO. 0{index + 1}</span>
                  <span className={isNormal ? "text-[#E8A5A0]" : "text-[#E0B424]"}>
                    {item.styleLabel.toUpperCase()}
                  </span>
                </div>
              </button>
            );
          })}
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
