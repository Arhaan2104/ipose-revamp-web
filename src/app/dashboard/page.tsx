"use client";

import DashboardTopbar from "@/components/layout/DashboardTopbar";
import {
  Briefcase,
  TrendingUp,
  Clock,
  IndianRupee,
  Gavel,
  ListChecks,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { mockKPIs, mockRevenueData, mockStageDistribution, mockDeals } from "@/lib/mock-data";
import { formatCurrency, getStageConfig } from "@/lib/utils";
import Link from "next/link";

const kpis = [
  {
    label: "Active Deals",
    value: mockKPIs.activeDeals.toString(),
    icon: Briefcase,
    change: "+3 this week",
    changePositive: true,
  },
  {
    label: "Conversion Rate",
    value: `${mockKPIs.conversionRate}%`,
    icon: TrendingUp,
    change: "+5% vs last month",
    changePositive: true,
  },
  {
    label: "Avg Time to Sale",
    value: `${mockKPIs.avgTimeToSaleDays} days`,
    icon: Clock,
    change: "-1.2 days",
    changePositive: true,
  },
  {
    label: "Monthly Revenue",
    value: formatCurrency(mockKPIs.monthlyRevenue),
    icon: IndianRupee,
    change: "+11% growth",
    changePositive: true,
  },
];

const recentDeals = mockDeals
  .filter((d) => d.stage !== "completed")
  .slice(0, 5);

export default function DashboardOverview() {
  return (
    <>
      <DashboardTopbar title="Dashboard Overview" />
      <div className="p-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-white rounded-2xl p-6 border border-cream-dark hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <kpi.icon className="w-5 h-5 text-navy" />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    kpi.changePositive
                      ? "text-green-700 bg-green-50"
                      : "text-red-700 bg-red-50"
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
              <p className="text-2xl font-heading font-bold text-navy-dark">
                {kpi.value}
              </p>
              <p className="text-sm text-navy-dark/50 mt-1">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-cream-dark">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-dark">
                  Revenue Trend
                </h3>
                <p className="text-sm text-navy-dark/40">Last 6 months</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-dark/40">
                <div className="w-3 h-3 rounded-full bg-gold" />
                Commission Revenue
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={mockRevenueData}>
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E8896B" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#E8896B" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0ebe3" />
                <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <YAxis
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`}
                />
                <Tooltip
                  formatter={(value) => [formatCurrency(Number(value)), "Revenue"]}
                  contentStyle={{
                    backgroundColor: "#1B2A3A",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#E8896B"
                  strokeWidth={2.5}
                  fill="url(#goldGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Stage Distribution */}
          <div className="bg-white rounded-2xl p-6 border border-cream-dark">
            <h3 className="font-heading text-lg font-bold text-navy-dark mb-2">
              Deal Distribution
            </h3>
            <p className="text-sm text-navy-dark/40 mb-4">By stage</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={mockStageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {mockStageDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1B2A3A",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "13px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {mockStageDistribution.slice(0, 6).map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: s.fill }}
                  />
                  <span className="text-navy-dark/60 truncate">{s.name}</span>
                  <span className="font-semibold text-navy-dark ml-auto">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats + Recent Deals */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <Gavel className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold text-navy-dark">Live Auctions</h3>
              </div>
              <p className="text-3xl font-heading font-bold text-navy-dark">
                {mockKPIs.auctionsLive}
              </p>
              <p className="text-sm text-navy-dark/40 mt-1">Active right now</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <div className="flex items-center gap-3 mb-3">
                <ListChecks className="w-5 h-5 text-navy" />
                <h3 className="font-semibold text-navy-dark">Total Listings</h3>
              </div>
              <p className="text-3xl font-heading font-bold text-navy-dark">
                {mockKPIs.totalListings}
              </p>
              <p className="text-sm text-navy-dark/40 mt-1">Since launch</p>
            </div>
          </div>

          {/* Recent Deals */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-cream-dark overflow-hidden">
            <div className="px-6 py-4 border-b border-cream-dark flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-navy-dark">
                Recent Active Deals
              </h3>
              <Link
                href="/dashboard/pipeline"
                className="text-sm text-gold hover:text-gold-dark font-medium"
              >
                View Pipeline →
              </Link>
            </div>
            <div className="divide-y divide-cream-dark">
              {recentDeals.map((deal) => {
                const stageConfig = getStageConfig(deal.stage);
                return (
                  <Link
                    key={deal.id}
                    href={`/dashboard/deals/${deal.id}`}
                    className="flex items-center justify-between px-6 py-4 hover:bg-cream/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-sm font-bold text-navy">
                        {deal.car.make[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-navy-dark text-sm truncate">
                          {deal.car.make} {deal.car.model} {deal.car.year}
                        </p>
                        <p className="text-xs text-navy-dark/40">
                          {deal.seller.name} &middot; {deal.seller.city}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-navy-dark">
                        {formatCurrency(deal.car.aiValuation ?? deal.car.listPrice)}
                      </span>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${stageConfig.bgColor} ${stageConfig.color}`}
                      >
                        {stageConfig.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
