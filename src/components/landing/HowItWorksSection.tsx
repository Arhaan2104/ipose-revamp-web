"use client";

import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import SectionHeading from "../ui/SectionHeading";
import {
  ClipboardList,
  UserCheck,
  Search,
  Brain,
  Gavel,
  Handshake,
  FileCheck,
} from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "List Your EV", description: "Quick 2-minute listing. Upload photos, enter details. No spam calls, ever." },
  { icon: UserCheck, title: "Buddy Assigned", description: "Your dedicated Relationship Manager takes ownership of your entire journey." },
  { icon: Search, title: "Smart Inspection", description: "30-45 min EV-native inspection. Battery diagnostics, not just paint checks." },
  { icon: Brain, title: "AI Valuation", description: "Multi-parameter AI pricing using battery SoH, usage patterns, and market data." },
  { icon: Gavel, title: "Transparent Auction", description: "3-day Vickrey auction with verified dealers. Fair bidding, no hidden deductions." },
  { icon: Handshake, title: "Deal Closure", description: "Your Buddy negotiates the best deal. You stay in control throughout." },
  { icon: FileCheck, title: "RC Transfer & Payout", description: "Complete legal facilitation. Insurance, RC transfer, warranty — all handled." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Process"
          title="How rEVamp Works"
          subtitle="Seven simple steps from listing to payout. Your Buddy handles the complexity."
        />

        <StaggerContainer className="mt-20">
          {/* Timeline layout */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5">
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="relative group text-center lg:text-left">
                    {/* Step dot on timeline */}
                    <div className="hidden lg:flex justify-center mb-6">
                      <div className="w-6 h-6 rounded-full border-2 border-navy/20 bg-cream flex items-center justify-center group-hover:border-gold transition-colors relative z-10">
                        <div className="w-2 h-2 rounded-full bg-navy/30 group-hover:bg-gold transition-colors" />
                      </div>
                    </div>

                    {/* Step number */}
                    <p className="text-[10px] font-semibold text-gold/50 tracking-[0.2em] uppercase mb-3">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-white border border-cream-dark flex items-center justify-center mb-4 mx-auto lg:mx-0 card-elevated">
                      <step.icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-sm text-slate font-normal italic mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate/40 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
