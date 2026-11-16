import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CareRegimenSection from "@/components/CareRegimenSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import AtelierStandardsSection from "@/components/AtelierStandardsSection";
import ArchiveSection from "@/components/ArchiveSection";
import WorkflowSection from "@/components/WorkflowSection";
import PoliciesSection from "@/components/PoliciesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Core Care Regimen (Packages) */}
        <CareRegimenSection />

        {/* 4. Specific Treatments (A La Carte Menu) */}
        <TreatmentsSection />

        {/* 5. Atelier Standards & Facility */}
        <AtelierStandardsSection />

        {/* 6. Real Restoration Archive (Before & After) */}
        <ArchiveSection />

        {/* 7. Zero Friction Workflow (4 Easy Steps) */}
        <WorkflowSection />

        {/* 8. Service Protocols & Policies */}
        <PoliciesSection />

        {/* 9. Direct Concierge Line / CTA */}
        <CtaSection />
      </main>

      {/* 10. Footer with Giant Watermark */}
      <Footer />
    </div>
  );
}
