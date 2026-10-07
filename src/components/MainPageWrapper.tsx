"use client";

import { useState } from "react";
import { PortfolioItem } from "@/types";
import { StyleId, FramingId } from "@/data/site";
import { ScrollProgress } from "./ScrollProgress";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MarqueeTicker } from "./MarqueeTicker";
import { StyleCards } from "./StyleCards";
import { Pricing } from "./Pricing";
import { Portfolio } from "./Portfolio";
import { Process } from "./Process";
import { OrderForm } from "./OrderForm";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { FloatingCta } from "./FloatingCta";

interface MainPageWrapperProps {
  portfolioItems: PortfolioItem[];
}

export function MainPageWrapper({ portfolioItems }: MainPageWrapperProps) {
  const [selectedStyle, setSelectedStyle] = useState<StyleId>("normal");
  const [selectedFraming, setSelectedFraming] = useState<FramingId>("headshot");

  const handleSelectStyle = (styleId: StyleId) => {
    setSelectedStyle(styleId);
    const element = document.getElementById("pesan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectFraming = (framingId: FramingId) => {
    setSelectedFraming(framingId);
    const element = document.getElementById("pesan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D0C10] text-[#EDE8DD] selection:bg-[#EDE8DD] selection:text-[#0D0C10]">
      
      {/* Static Film Grain Overlay */}
      <div className="film-grain" />

      {/* Flat 3px Bone Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Flat Ink Header Navbar */}
      <Navbar />

      {/* Main One-Page Content */}
      <main className="relative z-10">
        <Hero heroItems={portfolioItems} />
        
        {/* Slow Marquee Strip */}
        <MarqueeTicker />

        <StyleCards
          portfolioItems={portfolioItems}
          onSelectStyle={handleSelectStyle}
        />
        <Pricing onSelectFraming={handleSelectFraming} />
        <Portfolio items={portfolioItems} />
        <Process />
        <OrderForm
          selectedStyle={selectedStyle}
          selectedFraming={selectedFraming}
        />
        <Testimonials />
        <Faq />
        
        {/* Slow Marquee Strip Bottom */}
        <MarqueeTicker />
      </main>

      {/* Footer & Contacts */}
      <Footer />

      {/* Floating CTA Button for Mobile */}
      <FloatingCta />

    </div>
  );
}
