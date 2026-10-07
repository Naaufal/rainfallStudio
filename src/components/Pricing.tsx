"use client";

import { useState } from "react";
import { framings, addons, FramingId } from "@/data/site";
import { formatRupiah } from "@/lib/format";
import { ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectFraming: (framingId: FramingId) => void;
}

function CropDiagram({ type }: { type: FramingId }) {
  if (type === "headshot") {
    return (
      <div className="w-12 h-14 border border-[#EDE8DD]/40 relative flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border border-[#E8A5A0]" />
        <div className="absolute top-1 left-1 right-1 bottom-6 border border-dashed border-[#E8A5A0]" />
      </div>
    );
  }
  if (type === "half-body") {
    return (
      <div className="w-12 h-14 border border-[#EDE8DD]/40 relative flex items-center justify-center">
        <div className="w-5 h-5 rounded-full border border-[#A3A8C3]" />
        <div className="absolute top-1 left-1 right-1 bottom-3 border border-dashed border-[#A3A8C3]" />
      </div>
    );
  }
  return (
    <div className="w-12 h-14 border border-[#EDE8DD]/40 relative flex items-center justify-center">
      <div className="w-4 h-4 rounded-full border border-[#E0B424]" />
      <div className="absolute top-1 left-1 right-1 bottom-1 border border-dashed border-[#E0B424]" />
    </div>
  );
}

export function Pricing({ onSelectFraming }: PricingProps) {
  const [hoveredRow, setHoveredRow] = useState<FramingId | null>(null);
  const hasNullAddons = addons.extraPerson === null || addons.customBackground === null;

  return (
    <section id="harga" className="py-20 md:py-28 relative border-b border-[#EDE8DD]/14 scroll-mt-16">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
            NO. 02 — MENU TARIF HARI INI
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-6xl text-[#EDE8DD] uppercase tracking-tighter">
            DAFTAR HARGA UKURAN.
          </h2>
          <p className="font-mono text-xs text-[#A3A8C3] uppercase tracking-wider">
            * HARGA SAMA UNTUK VECTOR NORMAL MAUPUN GTA STYLE.
          </p>
        </div>

        {/* Printed Menu Table Rows */}
        <div className="border-t border-[#EDE8DD]/14">
          {framings.map((framing, idx) => {
            const isHovered = hoveredRow === framing.id;
            const formattedPrice = formatRupiah(framing.price);

            return (
              <div
                key={framing.id}
                onMouseEnter={() => setHoveredRow(framing.id)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => onSelectFraming(framing.id)}
                className={`group cursor-pointer py-8 border-b border-[#EDE8DD]/14 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 -mx-4 ${
                  isHovered ? "bg-[#16151B]" : ""
                }`}
              >
                {/* Left: Mono Index + Framing Name */}
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs tracking-widest text-[#EDE8DD]/40">
                    NO. 0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-condensed font-bold text-3xl sm:text-5xl text-[#EDE8DD] uppercase tracking-tight group-hover:text-[#A3A8C3] transition-colors">
                      {framing.name}
                    </h3>
                    <p className="font-sans text-sm text-[#EDE8DD]/70 mt-1">
                      {framing.description}
                    </p>
                  </div>
                </div>

                {/* Right: Price Numerals + Crop Silhouette Diagram + Button */}
                <div className="flex items-center justify-between md:justify-end gap-8">
                  <CropDiagram type={framing.id} />
                  
                  <span className="font-mono font-bold text-2xl sm:text-4xl text-[#EDE8DD]">
                    {formattedPrice}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFraming(framing.id);
                    }}
                    className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-xs px-4 py-3 uppercase tracking-wider border border-[#0D0C10] hidden sm:flex items-center gap-2"
                  >
                    <span>PESAN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Mono Ticker Line Beneath Menu */}
        <div className="mt-8 pt-4 font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase flex flex-wrap items-center justify-between gap-4">
          <div>
            <span>SUDAH TERMASUK: </span>
            <span className="text-[#EDE8DD]">PENGERJAAN &lt; 24 JAM /// REVISI 3X /// FORMAT JPEG & PNG HD /// QRIS</span>
          </div>
          {hasNullAddons && (
            <span className="text-[#E8A5A0]">
              * BIAYA TAMBAHAN ORANG/BACKGROUND DIKONFIRMASI VIA WA
            </span>
          )}
        </div>

      </div>
    </section>
  );
}
