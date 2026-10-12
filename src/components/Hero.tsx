"use client";

import Image from "next/image";
import { PortfolioItem } from "@/types";
import { siteConfig, getWhatsAppUrl } from "@/data/site";
import { ArrowUpRight, ArrowDown, Clock, ShieldCheck, FileCheck, CreditCard } from "lucide-react";

interface HeroProps {
  heroItem?: PortfolioItem;
  secondaryItem?: PortfolioItem;
}

export function Hero({ heroItem, secondaryItem }: HeroProps) {
  const primarySample = heroItem || {
    id: "sample-hero-1",
    src: "/portfolio/normal-01.jpeg",
    alt: "Karya vector portrait gaya Vector Normal buatan Rainfall Studio",
    title: "Gentle Silhouette I",
    styleLabel: "Vector Normal",
    framingLabel: "Half Body",
  };

  const secondarySample = secondaryItem || {
    id: "sample-hero-2",
    src: "/portfolio/gta-01.jpeg",
    alt: "Karya vector portrait gaya GTA Style buatan Rainfall Studio",
    title: "Vice Palette I",
    styleLabel: "GTA Style",
    framingLabel: "Half Body",
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#2A2826] bg-[#121110] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#2A2826] text-xs text-[#A39E98]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C45439]" />
            <span className="font-semibold text-[#F7F4EE] tracking-wider uppercase">
              Rainfall Studio
            </span>
            <span className="text-[#3D3936] font-light">/</span>
            <span className="font-serif italic text-sm text-[#A39E98]">
              Atelier & Portret Vektor Mandiri
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase font-medium">
            <span className="text-[#C45439] hidden sm:inline">
              Estimasi 24 Jam
            </span>
            <span className="text-[#A39E98]">
              Penyelesaian Manual · Bukan AI
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Typographic Scale & Manifesto */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <span className="font-serif italic text-sm sm:text-base text-[#D4A359] block">
                {siteConfig.headline}
              </span>
              
              {/* Main Headline with Mask Reveal */}
              <div className="overflow-hidden">
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F7F4EE] leading-[1.04] uppercase animate-mask-rise">
                  FOTOMU, DIGARIS ULANG MENJADI KARYA SENI VEKTOR.
                </h1>
              </div>
            </div>

            {/* Curated Statement */}
            <p className="font-serif italic text-base sm:text-lg text-[#F7F4EE]/90 leading-relaxed max-w-xl font-normal">
              Tracing manual teliti garis demi garis dari foto favoritmu. Kami mengabadikan karakter otentik ekspresimu dalam dua pendekatan visual: kelembutan <strong className="font-sans not-italic font-semibold text-[#F7F4EE]">Vector Normal</strong> atau kontras berani <strong className="font-sans not-italic font-semibold text-[#D4A359]">GTA Style</strong>.
            </p>

            {/* Direct Action Dispatch */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-atelier px-7 py-4 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-sans font-medium text-xs tracking-wider uppercase text-center inline-flex items-center justify-center gap-3 border border-[#C45439] shadow-md"
              >
                <span>Mulai Konsultasi Foto</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#portofolio"
                className="btn-atelier px-6 py-4 bg-[#1A1918] hover:bg-[#242220] text-[#F7F4EE] hover:text-[#FFFFFF] border border-[#2A2826] hover:border-[#A39E98] font-sans font-medium text-xs tracking-wider uppercase text-center inline-flex items-center justify-center gap-2"
              >
                <span>Lihat Koleksi Karya</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C45439]" />
              </a>
            </div>

            {/* Editorial Ledger Strip (Guarantees) */}
            <div className="pt-6 border-t border-[#2A2826] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#A39E98]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C45439] shrink-0" />
                <span className="font-medium text-[#F7F4EE]">24 Jam</span>
                <span className="text-[11px] text-[#A39E98] hidden xs:inline">Estimasi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C45439] shrink-0" />
                <span className="font-medium text-[#F7F4EE]">3x Revisi</span>
                <span className="text-[11px] text-[#A39E98] hidden xs:inline">Kecil</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-[#C45439] shrink-0" />
                <span className="font-medium text-[#F7F4EE]">PNG & JPG</span>
                <span className="text-[11px] text-[#A39E98] hidden xs:inline">HD</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#C45439] shrink-0" />
                <span className="font-medium text-[#F7F4EE]">QRIS</span>
                <span className="text-[11px] text-[#A39E98] hidden xs:inline">Mudah</span>
              </div>
            </div>

          </div>

          {/* Right Column: Curated Art Book Diptych Spreads */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#1A1918] border border-[#2A2826] p-4 sm:p-5 relative shadow-xl">
              
              {/* Diptych Header Annotation */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2A2826] text-xs">
                <span className="font-serif italic text-[#A39E98]">
                  Spesimen Kurasi No. 01 & 02
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 bg-[#242220] border border-[#2A2826] text-[#F7F4EE]">
                  Karya Asli Studio
                </span>
              </div>

              {/* Two Artworks Framed as Print Plates */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Plate 1: Vector Normal */}
                <div className="group space-y-2">
                  <div className="relative aspect-[3/4] bg-[#121110] border border-[#2A2826] overflow-hidden">
                    <Image
                      src={primarySample.src}
                      alt={primarySample.alt}
                      fill
                      priority
                      sizes="(max-width: 640px) 45vw, 240px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-[#121110]/90 backdrop-blur-xs text-[9px] uppercase font-semibold tracking-wider text-[#F7F4EE] border border-[#2A2826]">
                      Vector Normal
                    </div>
                  </div>
                  <div className="text-xs leading-snug">
                    <span className="font-serif italic text-[#F7F4EE] block truncate">
                      {primarySample.title}
                    </span>
                    <span className="text-[10px] text-[#A39E98] block">
                      {primarySample.framingLabel} · Gradasi Lembut
                    </span>
                  </div>
                </div>

                {/* Plate 2: GTA Style */}
                <div className="group space-y-2">
                  <div className="relative aspect-[3/4] bg-[#121110] border border-[#2A2826] overflow-hidden">
                    <Image
                      src={secondarySample.src}
                      alt={secondarySample.alt}
                      fill
                      priority
                      sizes="(max-width: 640px) 45vw, 240px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-[#121110]/90 backdrop-blur-xs text-[9px] uppercase font-semibold tracking-wider text-[#D4A359] border border-[#2A2826]">
                      GTA Style
                    </div>
                  </div>
                  <div className="text-xs leading-snug">
                    <span className="font-serif italic text-[#F7F4EE] block truncate">
                      {secondarySample.title}
                    </span>
                    <span className="text-[10px] text-[#A39E98] block">
                      {secondarySample.framingLabel} · Kontras Berani
                    </span>
                  </div>
                </div>

              </div>

              {/* Curated Bottom Footnote */}
              <div className="mt-4 pt-3 border-t border-[#2A2826] flex items-center justify-between text-xs text-[#A39E98]">
                <span className="font-medium text-[#F7F4EE]">
                  Tarif dasar mulai Rp35.000 / orang
                </span>
                <span className="font-serif italic text-xs text-[#C45439]">
                  Bisa pesan custom
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
