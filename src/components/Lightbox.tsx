"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/types";

interface LightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ item, items, onClose, onNavigate }: LightboxProps) {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [item]);

  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";
    const currentIndex = items.findIndex((i) => i.id === item.id);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      else if (e.key === "ArrowRight" && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (triggerRef.current) triggerRef.current.focus();
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualisasi besar ${item.alt}`}
      className="fixed inset-0 z-50 bg-[#0D0C10] flex flex-col justify-between p-4 sm:p-8 animate-fadeIn touch-manipulation"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#EDE8DD] border-b border-[#EDE8DD]/20 pb-4">
        <div>
          <span>{`ARTWORK NO. 0${currentIndex + 1} /// `}</span>
          <span className="text-[#A3A8C3]">{item.styleLabel.toUpperCase()}</span>
        </div>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Tutup lightbox"
          className="px-4 py-2 bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-xs uppercase hover:bg-[#A3A8C3] transition-colors focus:outline-none touch-manipulation min-w-[44px] min-h-[44px]"
        >
          [X] CLOSE
        </button>
      </div>

      {/* Main Image Display */}
      <div
        className="relative w-full h-[75vh] flex items-center justify-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Bar & Nav */}
      <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#EDE8DD]/60 border-t border-[#EDE8DD]/20 pt-4">
        <span>0{currentIndex + 1} / 0{items.length}</span>

        <div className="flex items-center gap-4">
          {hasPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="px-4 py-2 border border-[#EDE8DD]/40 text-[#EDE8DD] hover:bg-[#EDE8DD] hover:text-[#0D0C10] transition-colors touch-manipulation min-w-[44px] min-h-[44px]"
            >
              ← PREV
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="px-4 py-2 border border-[#EDE8DD]/40 text-[#EDE8DD] hover:bg-[#EDE8DD] hover:text-[#0D0C10] transition-colors touch-manipulation min-w-[44px] min-h-[44px]"
            >
              NEXT →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
