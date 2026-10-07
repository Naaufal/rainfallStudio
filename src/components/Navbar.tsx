"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#gaya", label: "GAYA", id: "gaya" },
  { href: "#harga", label: "HARGA", id: "harga" },
  { href: "#portofolio", label: "PORTOFOLIO", id: "portofolio" },
  { href: "#cara-pesan", label: "ALUR", id: "cara-pesan" },
  { href: "#testimoni", label: "TESTIMONI", id: "testimoni" },
  { href: "#faq", label: "FAQ", id: "faq" },
];

const SECTION_IDS = ["gaya", "harga", "portofolio", "cara-pesan", "pesan", "testimoni", "faq"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { scrollDirection, isPastThreshold } = useScrollDirection();
  const activeSection = useActiveSection(SECTION_IDS);
  const navRef = useRef<HTMLElement>(null);

  // Close menu on ESC
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0D0C10] border-b border-[#EDE8DD]/14 transition-transform duration-200 ${
        shouldHideOnMobile ? "-translate-y-full pointer-events-none" : "translate-y-0 pointer-events-auto"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Wordmark */}
        <Link
          href="/"
          className="font-condensed font-black text-2xl tracking-tighter text-[#EDE8DD] hover:text-[#A3A8C3] transition-colors focus:outline-none focus:ring-1 focus:ring-[#EDE8DD]"
        >
          {site.brand.toUpperCase()}
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-[#EDE8DD] ${
                  isActive
                    ? "text-[#A3A8C3] font-bold"
                    : "text-[#EDE8DD]/60 hover:text-[#EDE8DD]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A3A8C3]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#pesan"
            className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-xs px-4 py-2 uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#EDE8DD]"
          >
            PESAN
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
            className="md:hidden px-3 py-1.5 border border-[#EDE8DD]/30 text-[#EDE8DD] font-mono text-xs uppercase focus:outline-none touch-manipulation select-none"
          >
            {isOpen ? "[X] CLOSE" : "[=] MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0D0C10] border-b border-[#EDE8DD]/20 px-6 py-6 font-mono text-sm space-y-3"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`block py-2 border-b border-[#EDE8DD]/10 transition-colors ${
                  isActive ? "text-[#A3A8C3] font-bold pl-2 border-l-2 border-[#A3A8C3]" : "text-[#EDE8DD]/80"
                }`}
              >
                {`// ${link.label}`}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
