"use client";

import { useScrollY } from "@/hooks/useScrollY";
import { getWhatsAppUrl } from "@/data/site";
import { MessageSquare } from "lucide-react";

export function FloatingCta() {
  const { scrollY } = useScrollY();

  // Show after scrolling past Hero (e.g. 400px)
  const isVisible = scrollY > 400;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:hidden">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kirim pesan langsung ke WhatsApp Rainfall Studio"
        className="btn-atelier px-4 py-3 bg-[#C45439] hover:bg-[#A83F27] text-[#FFFFFF] font-sans font-medium text-xs tracking-wider uppercase flex items-center gap-2 border border-[#C45439] shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#F7F4EE]"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Chat WA</span>
      </a>
    </div>
  );
}
