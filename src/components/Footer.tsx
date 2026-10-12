"use client";

import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/site";
import { MessageSquare, ArrowUp } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontak" className="pt-16 pb-12 bg-[#121110] text-[#F7F4EE] border-t border-[#2A2826] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <Link href="/" className="inline-block group">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#F7F4EE] uppercase group-hover:text-[#C45439] transition-colors">
                {siteConfig.brand}
              </span>
            </Link>
            <p className="font-serif italic text-sm text-[#A39E98] max-w-sm leading-relaxed">
              {siteConfig.shortDescriptor}
            </p>
            <p className="text-xs uppercase tracking-wider text-[#C45439] font-medium">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="text-[#F7F4EE] font-semibold tracking-wider uppercase block mb-3 font-display">
              Navigasi Halaman
            </span>
            <ul className="space-y-2.5 text-[#A39E98]">
              <li>
                <a href="#portofolio" className="hover:text-[#F7F4EE] transition-colors">
                  Katalog Karya
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#F7F4EE] transition-colors">
                  Tarif & Spesifikasi
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-[#F7F4EE] transition-colors">
                  Alur Pemesanan
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#F7F4EE] transition-colors">
                  Tentang Studio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F7F4EE] transition-colors">
                  Pertanyaan (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="text-[#F7F4EE] font-semibold tracking-wider uppercase block mb-3 font-display">
              Kanal Resmi Pemesanan
            </span>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-[#1A1918] border border-[#2A2826] hover:border-[#C45439] text-[#F7F4EE] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C45439] shrink-0" />
                <div>
                  <span className="block text-[10px] text-[#A39E98] uppercase tracking-wider font-medium">WhatsApp Studio</span>
                  <span className="font-semibold text-xs sm:text-sm">{siteConfig.whatsappDisplay}</span>
                </div>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 bg-[#1A1918] border border-[#2A2826] hover:border-[#C45439] text-[#F7F4EE] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C45439] shrink-0" />
                <div>
                  <span className="block text-[10px] text-[#A39E98] uppercase tracking-wider font-medium">Instagram Resmi</span>
                  <span className="font-semibold text-xs sm:text-sm">{siteConfig.instagramHandle}</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-[#2A2826] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39E98]">
          <div>
            <span>© {currentYear} {siteConfig.brand.toUpperCase()}. Seluruh hak cipta dilindungi.</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:inline font-serif italic text-xs">Profil Bisnis Elektronik · Studio Ilustrasi</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C45439] transition-colors focus:outline-none"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
