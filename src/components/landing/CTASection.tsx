"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInWhenVisible>
          <div
            className="relative rounded-[2rem] p-14 md:p-20 text-center overflow-hidden grain"
            style={{
              background:
                "radial-gradient(ellipse 120% 100% at 50% 0%, #0E7C7B 0%, #082e2e 60%, #051a1a 100%)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] blur-[120px] opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #E8896B, transparent)" }}
            />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold/50 text-xs font-semibold uppercase tracking-[0.3em] mb-6"
              >
                Get Started
              </motion.p>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 italic">
                Ready to Know Your EV&apos;s
                <br />
                <span className="text-gold">True Value?</span>
              </h2>

              <p className="text-white/35 text-base max-w-md mx-auto mb-10 font-light leading-relaxed">
                Join 500+ EV owners who sold smarter with rEVamp.
                Zero spam. AI-backed pricing. Dedicated Buddy.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#how-it-works"
                  className="group relative px-8 py-4 bg-gold text-navy-dark font-semibold rounded-2xl overflow-hidden inline-flex items-center gap-2 shadow-[0_8px_32px_rgba(232,137,107,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <Link
                  href="/dashboard"
                  className="px-8 py-4 border border-white/15 text-white/70 font-medium rounded-2xl hover:bg-white/[0.06] hover:border-white/25 transition-all"
                >
                  View Demo Dashboard
                </Link>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
