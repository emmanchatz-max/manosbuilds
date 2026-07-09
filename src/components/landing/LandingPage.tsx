"use client";

import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { CapabilitySection } from "@/components/landing/CapabilitySection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { WorkPreviewSection } from "@/components/landing/WorkPreviewSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { NetworkBackground } from "@/components/landing/NetworkBackground";
import { usePointerPosition } from "@/hooks/usePointerPosition";

export function LandingPage() {
  const pointer = usePointerPosition();

  return (
    <div className="relative overflow-hidden">
      <NetworkBackground pointer={pointer} />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection pointer={pointer} />
          <ServicesSection />
          <CapabilitySection />
          <ProcessSection />
          <WorkPreviewSection />
          <FinalCtaSection />
        </main>
      </div>
    </div>
  );
}
