"use client";

import { siteConfig, getWhatsAppUrl } from "@/data/site";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function ClosingCta() {
  return (
    <section className="py-20 md:py-28 relative border-b border-[#2A2826] bg-[#161514] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1A1918] border border-[#2A2826] text-xs text-[#C45439] tracking-wider uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C45439]" />
          <span>Mulai Komisi Karya</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F7F4EE] tracking-tight uppercase max-w-2xl mx-auto leading-tight">
          SIAP MENGUBAH FOTOMU MENJADI ILUSTRASI?
        </h2>

        <p className="font-serif italic text-sm sm:text-base text-[#A39E98] max-w-lg mx-auto leading-relaxed">
          Kirimkan foto pilihanmu ke WhatsApp Rainfall Studio. Konsultasikan framing yang kamu inginkan, nikmati pengerjaan cepat 24 jam, dan dapatkan file resolusi tinggi siap cetak.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-atelier w-full sm:w-auto px-7 py-4 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-sans font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 border border-[#C45439] shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pesan via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-atelier w-full sm:w-auto px-6 py-4 bg-[#1A1918] hover:bg-[#242220] text-[#F7F4EE] hover:text-[#FFFFFF] border border-[#2A2826] text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2.5 transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#C45439]" />
            <span>Instagram {siteConfig.instagramHandle}</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-[#A39E98] flex flex-wrap items-center justify-center gap-4 uppercase tracking-wider font-medium">
          <span>Pembayaran QRIS</span>
          <span className="text-[#3D3936]">·</span>
          <span>Estimasi 24 Jam</span>
          <span className="text-[#3D3936]">·</span>
          <span>Maks. 3x Revisi Kecil</span>
          <span className="text-[#3D3936]">·</span>
          <span>File PNG & JPG HD</span>
        </div>

      </div>
    </section>
  );
}
