"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="relative bg-gradient-to-br from-navy-dark to-navy rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold rounded-full blur-[160px]" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto rounded-2xl bg-gold/20 flex items-center justify-center mb-8"
              >
                <Zap className="w-8 h-8 text-gold" />
              </motion.div>

              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to Know Your EV&apos;s
                <br />
                <span className="text-gradient">True Value?</span>
              </h2>

              <p className="text-white/50 text-lg max-w-lg mx-auto mb-10">
                Join 500+ EV owners who sold smarter with rEVamp.
                Zero spam calls. AI-backed pricing. Dedicated Buddy.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#how-it-works"
                  className="group px-8 py-4 bg-gold text-navy-dark font-semibold rounded-xl hover:bg-gold-light transition-all inline-flex items-center gap-2 shadow-lg shadow-gold/20"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/dashboard"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
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
