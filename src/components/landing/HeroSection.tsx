"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Battery, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden grain"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 20% 50%, #0E7C7B 0%, #082e2e 50%, #051a1a 100%)",
      }}
    >
      {/* Animated mesh gradient orbs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
          style={{
            background: "radial-gradient(circle, #E8896B 0%, transparent 70%)",
            top: "-10%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
          style={{
            background: "radial-gradient(circle, #12a09f 0%, transparent 70%)",
            bottom: "0%",
            left: "10%",
          }}
        />
      </motion.div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left — Text (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/70 text-sm font-medium mb-10 backdrop-blur-sm bg-white/[0.04]"
            >
              <Zap className="w-3.5 h-3.5 text-gold" />
              India&apos;s First EV-Native Resale Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.92] font-heading tracking-tight text-white mb-8"
            >
              Know Your
              <br />
              <span className="italic text-gold">Car&apos;s True</span>
              <br />
              <span className="font-body font-light tracking-normal text-[0.65em] text-white/50">
                Value
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/40 max-w-md mb-12 leading-relaxed font-light"
            >
              AI-driven battery diagnostics, transparent pricing, and a dedicated
              Buddy to manage your entire EV resale journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#how-it-works"
                className="group relative px-8 py-4 bg-gold text-navy-dark font-semibold rounded-2xl overflow-hidden inline-flex items-center gap-2 shadow-[0_8px_32px_rgba(232,137,107,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Sell My EV
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <Link
                href="/dashboard"
                className="px-8 py-4 border border-white/15 text-white/80 font-medium rounded-2xl hover:bg-white/[0.06] hover:border-white/25 transition-all backdrop-blur-sm"
              >
                Explore Platform
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: "500+", label: "EVs Evaluated" },
                { value: "98%", label: "Satisfaction" },
                { value: "7d", label: "Avg Sale Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-heading text-white">{stat.value}</p>
                  <p className="text-xs text-white/30 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Battery Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-gold/15 flex items-center justify-center">
                    <Battery className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Tata Nexon EV Max</p>
                    <p className="text-white/35 text-xs">2023 &middot; 18,420 km</p>
                  </div>
                </div>

                {/* Battery bars */}
                <div className="space-y-5 mb-7">
                  {[
                    { label: "Battery Health (SoH)", value: "94%", pct: 94, color: "from-emerald-400 to-emerald-500" },
                    { label: "Cell Balance", value: "91%", pct: 91, color: "from-sky-400 to-blue-500" },
                    { label: "Thermal Stability", value: "Excellent", pct: 96, color: "from-gold to-gold-light" },
                  ].map((bar, i) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-white/40">{bar.label}</span>
                        <span className="text-white font-medium">{bar.value}</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.pct}%` }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Valuation */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
                  <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1.5">
                    AI Valuation Range
                  </p>
                  <p className="text-white text-2xl font-heading">
                    &#8377;13.8L &ndash; &#8377;14.6L
                  </p>
                </div>
              </div>

              {/* Floating badge — Certified */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute -right-4 top-6 glass-card rounded-xl px-4 py-2.5 flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-xs font-medium">Certified</span>
              </motion.div>

              {/* Floating badge — Buddy */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.9 }}
                className="absolute -left-4 bottom-24 glass-card rounded-xl px-4 py-2.5"
              >
                <p className="text-white/30 text-[10px] uppercase tracking-wider">Your Buddy</p>
                <p className="text-white text-xs font-semibold">Priya S. assigned</p>
              </motion.div>

              {/* Glow behind card */}
              <div
                className="absolute -inset-20 -z-10 blur-[80px] opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, #E8896B 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom transition — angled cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <path d="M0 80L1440 80L1440 20Q720 80 0 20Z" fill="#F4F2EC" />
        </svg>
      </div>
    </section>
  );
}
