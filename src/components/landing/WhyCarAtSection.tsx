"use client";

import SectionHeading from "../ui/SectionHeading";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { Check, X, Minus } from "lucide-react";

const features = [
  "EV-Native Battery Diagnostics",
  "AI-Driven Fair Pricing",
  "Dedicated Buddy (Single POC)",
  "Zero Spam Calls",
  "End-to-End RC Transfer",
  "Battery Certification",
  "Transparent Auction",
  "Warranty Transfer Support",
];

const competitors = [
  {
    name: "rEVamp",
    highlight: true,
    scores: [true, true, true, true, true, true, true, true],
  },
  {
    name: "Cars24",
    highlight: false,
    scores: [false, false, false, false, "partial", false, false, false],
  },
  {
    name: "Spinny",
    highlight: false,
    scores: [false, false, false, false, "partial", false, false, "partial"],
  },
  {
    name: "OEM",
    highlight: false,
    scores: ["partial", false, "partial", true, true, false, false, true],
  },
];

function ScoreIcon({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-green-600" />
      </div>
    );
  if (value === "partial")
    return (
      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
        <Minus className="w-3.5 h-3.5 text-yellow-600" />
      </div>
    );
  return (
    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
      <X className="w-3.5 h-3.5 text-red-400" />
    </div>
  );
}

export default function WhyCarAtSection() {
  return (
    <section id="why-revamp" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Comparison"
          title="Why rEVamp Wins"
          subtitle="No other platform connects battery data, pricing, transaction, and trust in one place."
        />

        <FadeInWhenVisible className="mt-16 overflow-x-auto">
          <div className="min-w-[600px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-medium text-navy-dark/50">
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`py-4 px-6 text-center text-sm font-semibold ${
                        c.highlight
                          ? "text-navy-dark bg-gold/10 rounded-t-2xl"
                          : "text-navy-dark/60"
                      }`}
                    >
                      {c.highlight && (
                        <span className="block text-[10px] text-gold font-bold uppercase tracking-wider mb-1">
                          Our Platform
                        </span>
                      )}
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fi) => (
                  <tr
                    key={feature}
                    className={fi % 2 === 0 ? "bg-white/50" : ""}
                  >
                    <td className="py-4 px-4 text-sm font-medium text-navy-dark">
                      {feature}
                    </td>
                    {competitors.map((c) => (
                      <td
                        key={c.name}
                        className={`py-4 px-6 ${
                          c.highlight ? "bg-gold/5" : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          <ScoreIcon value={c.scores[fi]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
