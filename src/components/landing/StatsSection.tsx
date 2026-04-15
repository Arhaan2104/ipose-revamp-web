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
    <section
      className="py-28 relative overflow-hidden grain"
      style={{
        background:
          "radial-gradient(ellipse 100% 100% at 50% 100%, #0E7C7B 0%, #082e2e 40%, #051a1a 100%)",
      }}
    >
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-15"
          style={{ background: "radial-gradient(circle, #E8896B, transparent 70%)", top: "-20%", left: "30%" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <p className="text-gold/60 text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              The Numbers Speak
            </p>
            <div className="divider-gold mx-auto" />
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((s, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.12}>
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/30 transition-colors">
                  <s.icon className="w-5 h-5 text-gold/70" />
                </div>
                <div className="text-5xl md:text-6xl font-heading text-white mb-3 tracking-tight">
                  {s.isZero ? (
                    <span className="italic">0</span>
                  ) : (
                    <span className="italic">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </span>
                  )}
                </div>
                <p className="text-white/80 text-sm font-medium mb-1">{s.label}</p>
                <p className="text-white/30 text-xs">{s.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
