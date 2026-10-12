"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#portofolio", label: "Karya", id: "portofolio" },
  { href: "#layanan", label: "Tarif", id: "layanan" },
  { href: "#alur", label: "Alur", id: "alur" },
  { href: "#tentang", label: "Tentang", id: "tentang" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#kontak", label: "Kontak", id: "kontak" },
];

const SECTION_IDS = [
  "portofolio",
  "layanan",
  "alur",
  "tentang",
  "faq",
  "kontak",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { scrollDirection, isPastThreshold } = useScrollDirection();
  const activeSection = useActiveSection(SECTION_IDS);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleFocusIn = () => setIsFocused(true);
  const handleFocusOut = (e: React.FocusEvent) => {
    if (navRef.current && !navRef.current.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
    }
  };

  const shouldHideOnMobile =
    isPastThreshold && scrollDirection === "down" && !isOpen && !isFocused;

  return (
    <header
      ref={navRef}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#121110]/90 backdrop-blur-md border-b border-[#2A2826] ${
        shouldHideOnMobile
          ? "-translate-y-full pointer-events-none"
          : "translate-y-0 pointer-events-auto"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Editorial Masthead */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 focus:outline-none focus:ring-1 focus:ring-[#C45439]"
        >
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F7F4EE] group-hover:text-[#C45439] transition-colors">
            RAINFALL
          </span>
          <span className="font-serif italic text-xs sm:text-sm text-[#A39E98] font-normal tracking-wide hidden xs:inline">
            studio
          </span>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`py-1.5 relative transition-colors focus:outline-none focus:ring-1 focus:ring-[#C45439] ${
                  isActive
                    ? "text-[#F7F4EE] font-semibold"
                    : "text-[#A39E98] hover:text-[#F7F4EE]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C45439]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-atelier hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-sans font-medium text-xs tracking-wider uppercase border border-[#C45439] shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Pesan Karya</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="md:hidden w-11 h-11 flex items-center justify-center border border-[#2A2826] bg-[#1A1918] text-[#F7F4EE] hover:text-[#C45439] focus:outline-none focus:ring-1 focus:ring-[#C45439] transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#1A1918] border-b border-[#2A2826] px-5 py-6 space-y-4 animate-fadeIn"
        >
          <div className="font-serif italic text-xs text-[#A39E98] pb-2 border-b border-[#2A2826]">
            Eksplorasi Kurasi Studio
          </div>
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block py-3 px-3 text-sm tracking-wide transition-colors border-b border-[#2A2826]/40 ${
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#242220] border-l-2 border-l-[#C45439]"
                      : "text-[#A39E98] hover:text-[#F7F4EE]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-atelier w-full py-3.5 px-4 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-[#C45439]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Pesan via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
