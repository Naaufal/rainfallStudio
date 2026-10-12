"use client";

import { PortfolioItem } from "@/types";
import { ScrollProgress } from "./ScrollProgress";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Process } from "./Process";
import { About } from "./About";
import { Faq } from "./Faq";
import { ClosingCta } from "./ClosingCta";
import { Footer } from "./Footer";
import { FloatingCta } from "./FloatingCta";

interface MainPageWrapperProps {
  portfolioItems: PortfolioItem[];
}

export function MainPageWrapper({ portfolioItems }: MainPageWrapperProps) {
  const normalSample =
    portfolioItems.find((p) => p.style === "normal") || portfolioItems[0];
  const gtaSample =
    portfolioItems.find((p) => p.style === "gta") || portfolioItems[1];

  return (
    <div className="relative min-h-[100dvh] bg-[#121110] text-[#F7F4EE]">
      {/* Subtle Archival Artist Paper Texture */}
      <div className="artist-canvas-grain" />

      {/* Top Reading Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Masthead Navigation Bar */}
      <Navbar />

      {/* Curated Editorial Page Flow */}
      <main className="relative z-10">
        <Hero
          heroItem={normalSample}
          secondaryItem={gtaSample}
        />
        <Portfolio items={portfolioItems} />
        <Services />
        <Process />
        <About />
        <Faq />
        <ClosingCta />
      </main>

      {/* Atelier Footer & Colophon */}
      <Footer />

      {/* Discreet Mobile Floating WhatsApp CTA */}
      <FloatingCta />
    </div>
  );
}
