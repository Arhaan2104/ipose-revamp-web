"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Battery } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-dark via-navy/90 to-navy-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-gold/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full border border-gold/5"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              India&apos;s First EV-Native Resale Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Know Your{" "}
              <span className="text-gradient">Car&apos;s True</span>
              <br />
              Value
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed"
            >
              AI-driven battery diagnostics, transparent pricing, and a dedicated
              Buddy to manage your entire EV resale journey. Zero spam. Zero stress.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#how-it-works"
                className="group px-8 py-4 bg-gold text-navy-dark font-semibold rounded-xl hover:bg-gold-light transition-all inline-flex items-center gap-2 shadow-lg shadow-gold/20"
              >
                Sell My EV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/dashboard"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Platform
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Battery className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Tata Nexon EV Max</p>
                    <p className="text-white/50 text-sm">2023 &middot; 18,420 km</p>
                  </div>
                </div>

                {/* Battery metrics */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Battery Health (SoH)</span>
                      <span className="text-green-400 font-semibold">94%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Cell Balance</span>
                      <span className="text-blue-400 font-semibold">91%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "91%" }}
                        transition={{ duration: 1.5, delay: 1.0 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Thermal Stability</span>
                      <span className="text-gold font-semibold">Excellent</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "96%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* AI Valuation */}
                <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4">
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-1">AI Valuation Range</p>
                  <p className="text-white text-2xl font-heading font-bold">
                    &#8377;13.8L &ndash; &#8377;14.6L
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-6 top-8 bg-green-500/20 border border-green-400/30 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Certified</span>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute -left-4 bottom-20 bg-navy/80 border border-white/10 backdrop-blur-md rounded-xl px-4 py-2"
              >
                <p className="text-white/50 text-xs">Your Buddy</p>
                <p className="text-white text-sm font-semibold">Priya S. assigned</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60V120H0V60Z"
            fill="#F7F4EF"
          />
        </svg>
      </div>
    </section>
  );
}
