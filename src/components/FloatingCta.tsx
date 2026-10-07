"use client";

import { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/useScrollY";
import { ArrowRight } from "lucide-react";

export function FloatingCta() {
  const { scrollY } = useScrollY();
  const [isOrderFormInView, setIsOrderFormInView] = useState(false);

  useEffect(() => {
    const orderFormEl = document.getElementById("pesan");
    if (!orderFormEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOrderFormInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(orderFormEl);
    return () => observer.disconnect();
  }, []);

  const isPastHero = scrollY > 400;
  const isVisible = isPastHero && !isOrderFormInView;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-40 md:hidden animate-fadeIn">
      <a
        href="#pesan"
        className="btn-poster bg-[#EDE8DD] text-[#0D0C10] font-mono font-bold text-xs px-5 py-3 uppercase tracking-wider border border-[#0D0C10] flex items-center gap-2"
      >
        <span>PESAN SEKARANG</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
