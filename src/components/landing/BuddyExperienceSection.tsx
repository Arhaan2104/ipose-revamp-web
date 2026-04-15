"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { Heart, Award, Eye, MessageCircle, Calendar, CheckCircle2, Headphones } from "lucide-react";

const threeRs = [
  {
    icon: Heart,
    title: "Respect",
    desc: "Your time is valued. No spam, no pressure. Advisory approach, not sales-driven.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Award,
    title: "Reward",
    desc: "Transparent pricing ensures you get the best possible value for your EV.",
    color: "text-gold-dark",
    bg: "bg-amber-50",
  },
  {
    icon: Eye,
    title: "Recognise",
    desc: "Your car has a story. We certify its true value backed by battery data.",
    color: "text-navy",
    bg: "bg-blue-50",
  },
];

const touchpoints = [
  { icon: MessageCircle, label: "Intro Call", desc: "Meet your Buddy within 1 hour of listing" },
  { icon: Calendar, label: "Inspection Day", desc: "Buddy coordinates and supervises" },
  { icon: Headphones, label: "Auction Support", desc: "Real-time updates on bids" },
  { icon: CheckCircle2, label: "Closure", desc: "Handles all paperwork and payout" },
];

export default function BuddyExperienceSection() {
  return (
    <section id="buddy" className="py-24 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          light
          label="The Buddy Experience"
          title="Your Dedicated Expert, End to End"
          subtitle="Not a call center. Not a chatbot. A real expert who owns your journey from listing to payout."
        />

        {/* 3Rs */}
        <StaggerContainer className="mt-16 grid md:grid-cols-3 gap-6">
          {threeRs.map((r, i) => (
            <StaggerItem key={i}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <r.icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{r.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Touchpoint Timeline */}
        <FadeInWhenVisible className="mt-20">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {touchpoints.map((tp, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4 relative z-10">
                    <tp.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="font-heading text-white font-semibold mb-1">
                    {tp.label}
                  </h4>
                  <p className="text-sm text-white/40">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

        {/* rEVamp CARES values */}
        <FadeInWhenVisible className="mt-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <p className="text-center text-gold text-sm font-bold uppercase tracking-widest mb-8">
              Our Brand Values: rEVamp CARES
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { letter: "C", word: "Customer Commitment", desc: "Decisions anchored in customer needs" },
                { letter: "A", word: "Accountable Stewardship", desc: "Single Buddy owns the journey" },
                { letter: "R", word: "Radical Transparency", desc: "Full visibility into pricing" },
                { letter: "E", word: "Equity & Empowerment", desc: "Fair incentives, fair allocation" },
                { letter: "S", word: "Structured Consistency", desc: "Process-driven, not person-dependent" },
              ].map((v) => (
                <div key={v.letter} className="text-center">
                  <div className="text-4xl font-heading font-bold text-gold mb-2">
                    {v.letter}
                  </div>
                  <p className="text-white text-sm font-semibold mb-1">{v.word}</p>
                  <p className="text-white/40 text-xs">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
