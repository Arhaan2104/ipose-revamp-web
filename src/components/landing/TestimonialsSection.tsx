"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    car: "Tata Nexon EV Max 2022",
    quote:
      "Cars24 quoted me 8.5L and immediately started spamming me with calls. rEVamp's AI valued my car at 10.2L and my Buddy Priya handled everything. Got paid in 6 days with zero hassle.",
    avatar: "RM",
    salePrice: "10.4L",
  },
  {
    name: "Ananya Sharma",
    city: "Bangalore",
    car: "MG ZS EV 2023",
    quote:
      "I was worried about my car's battery being undervalued. rEVamp's diagnostic report showed 93% SoH which justified the premium pricing. The transparency was refreshing.",
    avatar: "AS",
    salePrice: "14.8L",
  },
  {
    name: "Vikram Choudhary",
    city: "Delhi",
    car: "Hyundai Kona Electric 2021",
    quote:
      "The Vickrey auction was genius. Multiple dealers bid fairly and I ended up getting 12% more than what Spinny offered. Plus, RC transfer done in 4 days!",
    avatar: "VC",
    salePrice: "11.2L",
  },
  {
    name: "Preethi Nair",
    city: "Chennai",
    car: "Tata Tigor EV 2022",
    quote:
      "As a first-time seller, the process was daunting. My Buddy Arjun guided me through every step. It felt like having a knowledgeable friend in the car business.",
    avatar: "PN",
    salePrice: "7.6L",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Sellers Say"
          subtitle="Real stories from EV owners who trusted rEVamp."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-cream-dark"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-6" />

              <p className="text-lg md:text-xl text-navy-dark leading-relaxed mb-8 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-dark">{t.name}</p>
                    <p className="text-sm text-navy-dark/50">
                      {t.car} &middot; {t.city}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-navy-dark/40 uppercase tracking-wider">
                    Sold for
                  </p>
                  <p className="text-xl font-heading font-bold text-gold-dark">
                    &#8377;{t.salePrice}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white transition-colors text-navy-dark"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-gold w-6"
                      : "bg-navy-dark/20 hover:bg-navy-dark/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy/20 flex items-center justify-center hover:bg-navy hover:text-white transition-colors text-navy-dark"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
