"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BatteryIntelligenceSection from "@/components/landing/BatteryIntelligenceSection";
import WhyCarAtSection from "@/components/landing/WhyCarAtSection";
import ForSellersSection from "@/components/landing/ForSellersSection";
import BuddyExperienceSection from "@/components/landing/BuddyExperienceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import StatsSection from "@/components/landing/StatsSection";
import CTASection from "@/components/landing/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BatteryIntelligenceSection />
        <WhyCarAtSection />
        <ForSellersSection />
        <BuddyExperienceSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
