"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import SectionHeading from "../ui/SectionHeading";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import { Activity, Thermometer, BatteryCharging, Gauge, CircuitBoard, Zap } from "lucide-react";

const radarData = [
  { metric: "SoH", value: 94, fullMark: 100 },
  { metric: "Cell Balance", value: 91, fullMark: 100 },
  { metric: "Thermal", value: 96, fullMark: 100 },
  { metric: "Range", value: 88, fullMark: 100 },
  { metric: "DCIR", value: 85, fullMark: 100 },
];

const metrics = [
  { icon: Activity, label: "State of Health", value: "94%", desc: "Overall battery condition" },
  { icon: CircuitBoard, label: "DC Internal Resistance", value: "42m\u03A9", desc: "Power delivery efficiency" },
  { icon: Gauge, label: "Cycle Count", value: "312", desc: "Charge-discharge cycles" },
  { icon: Thermometer, label: "Thermal Stability", value: "Excellent", desc: "Temperature management" },
  { icon: BatteryCharging, label: "Estimated Range", value: "312 km", desc: "Real-world range estimate" },
  { icon: Zap, label: "Degradation Rate", value: "2.1%/yr", desc: "Annual capacity loss" },
];

export default function BatteryIntelligenceSection() {
  return (
    <section id="battery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Moat"
          title="Battery Intelligence Engine"
          subtitle="Lab-grade diagnostics that no other resale platform offers. Multi-parameter testing across SoH, DCIR, cycle life, and thermal stability."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Radar Chart */}
          <FadeInWhenVisible direction="left">
            <div className="bg-navy-dark rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  Live Battery Diagnostic
                </p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 13 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    dataKey="value"
                    stroke="#E8896B"
                    fill="#E8896B"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-center text-white/40 text-xs mt-2">
                Tata Nexon EV Max 2023 &middot; Battery Score: 91/100
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Metrics Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <StaggerItem key={i}>
                <div className="bg-cream rounded-2xl p-5 border border-cream-dark hover:border-gold/30 transition-colors group">
                  <m.icon className="w-5 h-5 text-navy mb-3 group-hover:text-gold transition-colors" />
                  <p className="text-sm text-navy-dark/50 mb-1">{m.label}</p>
                  <p className="text-xl font-heading font-bold text-navy-dark">
                    {m.value}
                  </p>
                  <p className="text-xs text-navy-dark/40 mt-1">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
