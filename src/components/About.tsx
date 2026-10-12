"use client";

import { aboutContent, styles } from "@/data/site";
import { PenTool, HeartHandshake } from "lucide-react";

export function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 relative border-b border-[#2A2826] scroll-mt-20 bg-[#161514]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#A39E98] tracking-wider uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
            <span>Filosofi & Pendekatan Artistik</span>
          </div>
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F7F4EE] tracking-tight uppercase">
            SENTUHAN TANGAN, BUKAN FILTER OTOMATIS.
          </h2>
          
          <p className="font-serif italic text-sm sm:text-base text-[#D4A359]">
            {aboutContent.tagline}
          </p>
        </div>

        {/* Large Curatorial Pull-Quote */}
        <div className="p-8 sm:p-12 bg-[#1A1918] border-l-2 border-[#C45439] border-y border-r border-[#2A2826] relative shadow-lg">
          <span className="font-serif italic text-xs text-[#A39E98] block mb-4">
            Manifesto Studio
          </span>
          <blockquote className="font-serif italic text-lg sm:text-2xl text-[#F7F4EE] leading-relaxed max-w-4xl font-normal">
            &ldquo;{aboutContent.quote}&rdquo;
          </blockquote>
        </div>

        {/* Dual Style Character Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {styles.map((style) => {
            const isGta = style.id === "gta";

            return (
              <div
                key={style.id}
                className="p-7 bg-[#1A1918] border border-[#2A2826] space-y-5 hover:border-[#C45439]/50 transition-colors"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#2A2826]">
                  <span className={`font-display font-bold text-lg uppercase tracking-tight ${isGta ? "text-[#D4A359]" : "text-[#F7F4EE]"}`}>
                    {style.name}
                  </span>
                  <span className="font-serif italic text-xs text-[#A39E98]">
                    Semi-Realistis
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-semibold text-base text-[#F7F4EE]">
                    {style.punchline}
                  </h3>
                  <p className="font-serif italic text-sm text-[#A39E98] leading-relaxed">
                    {style.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#A39E98] font-medium block mb-2.5">
                    Rekomendasi Penggunaan:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {style.bestFor.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-[#121110] border border-[#2A2826] text-[#A39E98]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Craft Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-[#A39E98] pt-2">
          <div className="p-5 bg-[#1A1918]/80 border border-[#2A2826] flex items-start gap-4">
            <PenTool className="w-5 h-5 text-[#C45439] shrink-0 mt-0.5" />
            <div>
              <span className="font-display font-bold text-sm text-[#F7F4EE] block mb-1 uppercase tracking-tight">
                Penelusuran Manual Teliti
              </span>
              <p className="font-sans text-xs text-[#A39E98] leading-relaxed">
                Setiap karya digambar manual titik demi titik, garis demi garis dari foto referensimu — menjaga karakter wajah asli tetap hidup.
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#1A1918]/80 border border-[#2A2826] flex items-start gap-4">
            <HeartHandshake className="w-5 h-5 text-[#C45439] shrink-0 mt-0.5" />
            <div>
              <span className="font-display font-bold text-sm text-[#F7F4EE] block mb-1 uppercase tracking-tight">
                Personal & Penuh Makna
              </span>
              <p className="font-sans text-xs text-[#A39E98] leading-relaxed">
                Didesain khusus untuk kado ulang tahun, hadiah anniversary, foto profil estetik, atau kenang-kenangan bersama orang terkasih.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
