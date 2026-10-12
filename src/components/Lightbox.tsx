"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PortfolioItem } from "@/types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ item, items, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prevIndex);
      } else if (e.key === "ArrowRight") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(nextIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detail karya: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121110]/95 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#1A1918] border border-[#2A2826] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2826] bg-[#121110] text-xs">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-sm text-[#C45439] font-medium">
              Plat {currentIndex + 1} / {items.length}
            </span>
            <span className="text-[#3D3936] hidden sm:inline">—</span>
            <span className="font-serif italic text-sm text-[#F7F4EE] font-medium truncate max-w-[200px] sm:max-w-none">
              {item.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 bg-[#1A1918] border border-[#2A2826] text-[#A39E98] text-[10px] uppercase tracking-wider font-medium">
              {item.framingLabel} · {item.styleLabel}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau karya"
              className="w-7 h-7 flex items-center justify-center border border-[#2A2826] hover:border-[#C45439] text-[#F7F4EE] hover:text-[#C45439] focus:outline-none focus:ring-1 focus:ring-[#C45439] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] max-h-[72vh] bg-[#121110] overflow-hidden flex items-center justify-center p-3">
          <div className="relative w-full h-full max-h-[70vh] aspect-[3/4]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 95vw, 800px"
              className="object-contain"
              priority
            />
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={() => onNavigate(prevIndex)}
            aria-label="Karya sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#1A1918]/90 hover:bg-[#1A1918] border border-[#2A2826] text-[#F7F4EE] hover:text-[#C45439] focus:outline-none focus:ring-1 focus:ring-[#C45439] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => onNavigate(nextIndex)}
            aria-label="Karya berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-[#1A1918]/90 hover:bg-[#1A1918] border border-[#2A2826] text-[#F7F4EE] hover:text-[#C45439] focus:outline-none focus:ring-1 focus:ring-[#C45439] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#121110] border-t border-[#2A2826] flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-[#A39E98]">
          <span className="text-center sm:text-left font-serif italic">
            Karya asli kurasi Rainfall Studio · Resolusi tinggi siap cetak
          </span>
          <span className="text-[#A39E98] text-[11px]">
            ESC untuk tutup · Tombol panah untuk navigasi
          </span>
        </div>
      </div>
    </div>
  );
}
