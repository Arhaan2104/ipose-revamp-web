"use client";

import { use } from "react";
import DashboardTopbar from "@/components/layout/DashboardTopbar";
import { mockDeals } from "@/lib/mock-data";
import { formatCurrency, getStageConfig, timeAgo } from "@/lib/utils";
import { SEVERITY_COLORS, ISSUE_CATEGORY_LABELS } from "@/lib/constants";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  ArrowLeft,
  Battery,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Gauge,
  Thermometer,
  Activity,
  CircuitBoard,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function DealDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const deal = mockDeals.find((d) => d.id === id);

  if (!deal) {
    return (
      <>
        <DashboardTopbar title="Deal Not Found" />
        <div className="p-8 text-center">
          <p className="text-navy-dark/50">Deal {id} not found.</p>
          <Link href="/dashboard/pipeline" className="text-gold hover:underline mt-2 inline-block">
            Back to Pipeline
          </Link>
        </div>
      </>
    );
  }

  const stageConfig = getStageConfig(deal.stage);
  const bh = deal.car.batteryHealth;

  const radarData = [
    { metric: "SoH", value: bh.stateOfHealth },
    { metric: "Cell Balance", value: bh.cellBalanceScore },
    { metric: "Thermal", value: bh.thermalStability === "excellent" ? 96 : bh.thermalStability === "good" ? 82 : bh.thermalStability === "fair" ? 65 : 45 },
    { metric: "Range", value: Math.min(100, Math.round((bh.estimatedRange / 500) * 100)) },
    { metric: "DCIR", value: Math.max(0, 100 - bh.dcInternalResistance) },
  ];

  const pricingData = [
    { label: "List Price", price: deal.car.listPrice },
    ...(deal.car.aiValuation
      ? [{ label: "AI Valuation", price: deal.car.aiValuation }]
      : []),
    ...deal.bids.map((b) => ({
      label: b.dealerName.split(" ")[0],
      price: b.amount,
    })),
    ...(deal.car.finalSalePrice
      ? [{ label: "Final Sale", price: deal.car.finalSalePrice }]
      : []),
  ];

  return (
    <>
      <DashboardTopbar title={`${deal.car.make} ${deal.car.model} ${deal.car.year}`} />
      <div className="p-8">
        {/* Back link */}
        <Link
          href="/dashboard/pipeline"
          className="inline-flex items-center gap-2 text-sm text-navy-dark/50 hover:text-navy-dark mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pipeline
        </Link>

        {/* Status badge */}
        <div className="flex items-center gap-4 mb-8">
          <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${stageConfig.bgColor} ${stageConfig.color}`}>
            {stageConfig.label}
          </span>
          <span className="text-sm text-navy-dark/40">
            Deal {deal.id} &middot; Created {timeAgo(deal.createdAt)}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1: Car & Seller Info */}
          <div className="space-y-6">
            {/* Car Details */}
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-4">
                Vehicle Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Make / Model</span>
                  <span className="font-medium text-navy-dark">
                    {deal.car.make} {deal.car.model}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Year / Variant</span>
                  <span className="font-medium text-navy-dark">
                    {deal.car.year} {deal.car.variant}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Color</span>
                  <span className="font-medium text-navy-dark">{deal.car.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Registration</span>
                  <span className="font-mono text-navy-dark">{deal.car.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Odometer</span>
                  <span className="font-medium text-navy-dark">
                    {deal.car.odometerKm.toLocaleString()} km
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-dark/50">Owners</span>
                  <span className="font-medium text-navy-dark">
                    {deal.car.ownerCount === 1 ? "1st Owner" : `${deal.car.ownerCount} Owners`}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-4">
                Seller
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">
                  {deal.seller.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-navy-dark">{deal.seller.name}</p>
                  <p className="text-xs text-navy-dark/40 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {deal.seller.city}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-navy-dark/50">
                  <Mail className="w-4 h-4" /> {deal.seller.email}
                </div>
                <div className="flex items-center gap-2 text-navy-dark/50">
                  <Phone className="w-4 h-4" /> {deal.seller.phone}
                </div>
              </div>
            </div>

            {/* Bid History */}
            {deal.bids.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-4">
                  Bid History
                </h3>
                <div className="space-y-3">
                  {deal.bids.map((bid) => (
                    <div
                      key={bid.id}
                      className="flex items-center justify-between text-sm p-3 rounded-xl bg-cream/50"
                    >
                      <div>
                        <p className="font-medium text-navy-dark">{bid.dealerName}</p>
                        <p className="text-xs text-navy-dark/40">{timeAgo(bid.timestamp)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-navy-dark">{formatCurrency(bid.amount)}</p>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            bid.status === "accepted"
                              ? "bg-green-100 text-green-700"
                              : bid.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : bid.status === "expired"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {bid.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Battery Health + Pricing */}
          <div className="space-y-6">
            {/* Battery Radar */}
            <div className="bg-navy-dark rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Battery className="w-5 h-5 text-gold" />
                <h3 className="font-heading text-lg font-bold text-white">
                  Battery Health
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    dataKey="value"
                    stroke="#E8896B"
                    fill="#E8896B"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: Activity, label: "SoH", value: `${bh.stateOfHealth}%` },
                  { icon: CircuitBoard, label: "DCIR", value: `${bh.dcInternalResistance}m\u03A9` },
                  { icon: Gauge, label: "Cycles", value: bh.cycleCount.toString() },
                  { icon: Thermometer, label: "Thermal", value: bh.thermalStability },
                  { icon: Battery, label: "Range", value: `${bh.estimatedRange}km` },
                  { icon: Activity, label: "Degrad.", value: `${bh.degradationRate}%/yr` },
                ].map((m, i) => (
                  <div key={i} className="text-center p-2 rounded-xl bg-white/5">
                    <m.icon className="w-4 h-4 text-gold/60 mx-auto mb-1" />
                    <p className="text-[10px] text-white/40">{m.label}</p>
                    <p className="text-xs font-semibold text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-4">
                Pricing Timeline
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={pricingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0ebe3" />
                  <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    formatter={(value) => [formatCurrency(Number(value)), "Price"]}
                    contentStyle={{
                      backgroundColor: "#1B2A3A",
                      border: "none",
                      borderRadius: "12px",
                      color: "white",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#E8896B"
                    strokeWidth={2.5}
                    dot={{ fill: "#E8896B", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Column 3: Stage Timeline + Issues + Notes */}
          <div className="space-y-6">
            {/* Stage Timeline */}
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-4">
                Stage Progress
              </h3>
              <div className="space-y-0">
                {deal.stageHistory.map((sh, i) => {
                  const sc = getStageConfig(sh.stage);
                  const isLast = i === deal.stageHistory.length - 1;
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${isLast ? "bg-gold" : "bg-navy/20"} ring-4 ${isLast ? "ring-gold/20" : "ring-transparent"}`}
                        />
                        {!isLast && (
                          <div className="w-0.5 h-8 bg-navy/10" />
                        )}
                      </div>
                      <div className={`pb-6 ${isLast ? "" : ""}`}>
                        <p className={`text-sm font-medium ${isLast ? "text-gold-dark" : "text-navy-dark"}`}>
                          {sc.label}
                        </p>
                        <p className="text-[10px] text-navy-dark/40 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(sh.enteredAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Issues */}
            {deal.issues.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                <h3 className="font-heading text-lg font-bold text-navy-dark mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Issues ({deal.issues.length})
                </h3>
                <div className="space-y-3">
                  {deal.issues.map((issue) => {
                    const sc = SEVERITY_COLORS[issue.severity];
                    return (
                      <div key={issue.id} className={`p-4 rounded-xl ${sc.bg} border border-transparent`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${sc.dot}`} />
                          <span className={`text-xs font-bold uppercase ${sc.text}`}>
                            {issue.severity}
                          </span>
                          <span className="text-xs text-navy-dark/40 ml-auto">
                            {ISSUE_CATEGORY_LABELS[issue.category]}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-navy-dark mb-1">
                          {issue.title}
                        </p>
                        <p className="text-xs text-navy-dark/50">{issue.description}</p>
                        <div className="flex items-center gap-3 mt-3 text-[10px]">
                          <span className={`px-2 py-0.5 rounded-full ${
                            issue.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : issue.status === "escalated"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {issue.status}
                          </span>
                          {issue.responseTimeMinutes && (
                            <span className="flex items-center gap-1 text-navy-dark/40">
                              <Clock className="w-3 h-3" />
                              {issue.responseTimeMinutes}m response
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-3">
                Notes
              </h3>
              <p className="text-sm text-navy-dark/60 leading-relaxed">
                {deal.notes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
