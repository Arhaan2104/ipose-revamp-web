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
  {
    icon: ClipboardList,
    title: "List Your EV",
    description: "Quick 2-minute listing. Upload photos, enter details. No spam calls, ever.",
  },
  {
    icon: UserCheck,
    title: "Buddy Assigned",
    description: "Your dedicated Relationship Manager takes ownership of your entire journey.",
  },
  {
    icon: Search,
    title: "Smart Inspection",
    description: "30-45 min EV-native inspection. Battery diagnostics, not just paint checks.",
  },
  {
    icon: Brain,
    title: "AI Valuation",
    description: "Multi-parameter AI pricing using battery SoH, usage patterns, and market data.",
  },
  {
    icon: Gavel,
    title: "Transparent Auction",
    description: "3-day Vickrey auction with verified dealers. Fair bidding, no hidden deductions.",
  },
  {
    icon: Handshake,
    title: "Deal Closure",
    description: "Your Buddy negotiates the best deal. You stay in control throughout.",
  },
  {
    icon: FileCheck,
    title: "RC Transfer & Payout",
    description: "Complete legal facilitation. Insurance, RC transfer, warranty — all handled.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Process"
          title="How rEVamp Works"
          subtitle="Seven simple steps from listing to payout. Your Buddy handles the complexity."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, i) => (
            <StaggerItem key={i} className="relative group">
              <div className="bg-white rounded-2xl p-6 h-full border border-cream-dark hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300">
                {/* Step number */}
                <div className="text-xs font-bold text-gold/50 mb-3">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <step.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-base font-bold text-navy-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-dark/50 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 rotate-45 border-t-2 border-r-2 border-gold/30" />
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
