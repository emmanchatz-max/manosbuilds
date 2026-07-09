"use client";

import { AtmosphereBackground } from "@/components/landing/AtmosphereBackground";
import { ContactSection } from "@/components/landing/ContactSection";
import { CursorGlow } from "@/components/landing/CursorGlow";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { usePointerPosition } from "@/hooks/usePointerPosition";

export function LandingPage() {
  const pointer = usePointerPosition();

  return (
    <div className="relative overflow-hidden bg-[#07111f]">
      <AtmosphereBackground pointer={pointer} />
      <CursorGlow pointer={pointer} />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection pointer={pointer} />
          <ServicesSection />
          <IndustriesSection />
          <PortfolioSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
