"use client";

import SectionHeading from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import {
  PhoneOff,
  TrendingDown,
  Clock,
  ArrowRight,
  Shield,
  IndianRupee,
  Zap,
} from "lucide-react";

const painPoints = [
  {
    icon: PhoneOff,
    pain: "72% report spam calls",
    detail: "Platforms sell your data to dozens of dealers who bombard you with calls.",
  },
  {
    icon: TrendingDown,
    pain: "24% price gap across platforms",
    detail: "Hidden deductions after inspection. The price you see is never the price you get.",
  },
  {
    icon: Clock,
    pain: "18-month legal liability",
    detail: "RC transfer delays leave you legally liable for challans and accidents.",
  },
];

const solutions = [
  {
    icon: Shield,
    title: "Zero Spam, Full Privacy",
    detail: "Your details stay private. Only your Buddy contacts you. No data leaks.",
  },
  {
    icon: IndianRupee,
    title: "5%+ Higher Realisation",
    detail: "AI-backed transparent pricing. The price we quote is the price you get.",
  },
  {
    icon: Zap,
    title: "20+ Hours Saved",
    detail: "End-to-end legal facilitation. RC transfer, insurance, challans — all handled.",
  },
];

export default function ForSellersSection() {
  return (
    <section id="sellers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="For Sellers"
          title="Your Problems, Our Solutions"
          subtitle="We heard what 4.8M sellers outside organised platforms are saying."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          {/* Pain Points */}
          <StaggerContainer className="space-y-4">
            <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-4">
              The Problem
            </p>
            {painPoints.map((p, i) => (
              <StaggerItem key={i}>
                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <p.icon className="w-5 h-5 text-red-400" />
                    <p className="font-semibold text-navy-dark text-sm">{p.pain}</p>
                  </div>
                  <p className="text-sm text-navy-dark/50 ml-8">{p.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs font-bold text-gold uppercase tracking-wider">
                rEVamp fixes this
              </span>
            </div>
          </div>

          {/* Solutions */}
          <StaggerContainer className="space-y-4">
            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4">
              The Solution
            </p>
            {solutions.map((s, i) => (
              <StaggerItem key={i}>
                <div className="bg-green-50/50 border border-green-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="w-5 h-5 text-green-600" />
                    <p className="font-semibold text-navy-dark text-sm">{s.title}</p>
                  </div>
                  <p className="text-sm text-navy-dark/50 ml-8">{s.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
