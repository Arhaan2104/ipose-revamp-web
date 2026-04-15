"use client";

import AnimatedCounter from "../ui/AnimatedCounter";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { Battery, Star, Clock, PhoneOff } from "lucide-react";

const stats = [
  {
    icon: Battery,
    value: 500,
    suffix: "+",
    label: "EVs Evaluated",
    desc: "Battery diagnostics completed",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Seller Satisfaction",
    desc: "Based on post-sale surveys",
  },
  {
    icon: Clock,
    value: 7,
    suffix: " Days",
    label: "Average Time to Sale",
    desc: "From listing to payout",
  },
  {
    icon: PhoneOff,
    value: 0,
    suffix: "",
    label: "Spam Calls",
    desc: "Your data stays private",
    isZero: true,
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-dark via-navy to-navy-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gold rounded-full blur-[96px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <p className="text-center text-gold text-sm font-bold uppercase tracking-widest mb-16">
            The Numbers Speak
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {s.isZero ? (
                    <span>0</span>
                  ) : (
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  )}
                </div>
                <p className="text-white font-semibold mb-1">{s.label}</p>
                <p className="text-white/40 text-sm">{s.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
