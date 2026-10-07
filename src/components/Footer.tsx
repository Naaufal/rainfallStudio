"use client";

import { site } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;
  const directWaUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Halo Rainfall Studio! Saya mau bertanya seputar pemesanan vector art."
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontak" className="relative pt-20 pb-12 border-t border-[#EDE8DD]/14 bg-[#0D0C10] overflow-hidden">
      
      {/* Registration Cross Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="reg-cross absolute top-0 left-4" />
        <div className="reg-cross absolute top-0 right-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Contact Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-[#EDE8DD]/60 uppercase">
              NO. 08 — HUBUNGI KAMI
            </p>
            <h2 className="font-condensed font-black text-4xl sm:text-7xl text-[#EDE8DD] uppercase tracking-tighter leading-none">
              SIAP UBAH FOTOMU?
            </h2>
            <p className="font-sans text-base text-[#EDE8DD]/80">
              Diskusi gratis via WhatsApp. Pengerjaan kurang dari 24 jam dengan jatah 3x revisi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-xs px-8 py-4 uppercase tracking-wider text-center inline-flex items-center justify-center gap-3 border border-[#0D0C10]"
            >
              <span>CHAT WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-[#EDE8DD] border border-[#EDE8DD]/30 hover:border-[#EDE8DD] px-6 py-4 text-center uppercase transition-colors"
            >
              INSTAGRAM @{site.instagram.toUpperCase()}
            </a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="pt-8 border-t border-[#EDE8DD]/14 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#EDE8DD]/60 uppercase">
          <div>
            <span>© {currentYear} {site.brand.toUpperCase()} — HAK CIPTA DILINDUNGI.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>DIBUAT UNTUK TUGAS KULIAH</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="hover:text-[#EDE8DD] transition-colors"
            >
              [↑ KEMBALI KE ATAS]
            </button>
          </div>
        </div>

        {/* Giant Cropped Wordmark Bleeding off bottom edge */}
        <div
          aria-hidden="true"
          className="mt-12 text-center select-none overflow-hidden leading-none pointer-events-none"
        >
          <span className="font-condensed font-black text-[18vw] text-[#EDE8DD]/[0.04] tracking-tighter block uppercase -mb-[5vw]">
            RAINFALL
          </span>
        </div>

      </div>
    </footer>
  );
}
