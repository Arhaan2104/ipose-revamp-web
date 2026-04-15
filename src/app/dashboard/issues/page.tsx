"use client";

import { useState } from "react";
import DashboardTopbar from "@/components/layout/DashboardTopbar";
import { allIssues, mockDeals } from "@/lib/mock-data";
import { SEVERITY_COLORS, ISSUE_CATEGORY_LABELS } from "@/lib/constants";
import { IssueSeverity, IssueStatus } from "@/lib/types";
import { timeAgo } from "@/lib/utils";
import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default function IssuesPage() {
  const [severityFilter, setSeverityFilter] = useState<IssueSeverity | "all">("all");
  const [statusFilter, setStatusFilter] = useState<IssueStatus | "all">("all");

  const filtered = allIssues.filter((issue) => {
    if (severityFilter !== "all" && issue.severity !== severityFilter) return false;
    if (statusFilter !== "all" && issue.status !== statusFilter) return false;
    return true;
  });

  const openCount = allIssues.filter((i) => i.status === "open").length;
  const inProgressCount = allIssues.filter((i) => i.status === "in_progress").length;
  const resolvedCount = allIssues.filter((i) => i.status === "resolved").length;
  const avgResponseTime = Math.round(
    allIssues
      .filter((i) => i.responseTimeMinutes !== null)
      .reduce((sum, i) => sum + (i.responseTimeMinutes ?? 0), 0) /
      (allIssues.filter((i) => i.responseTimeMinutes !== null).length || 1)
  );

  return (
    <>
      <DashboardTopbar title="Issue Tracker" />
      <div className="p-8 space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Open Issues", value: openCount, icon: AlertTriangle, color: "text-red-500", bg: "bg-red-50" },
            { label: "In Progress", value: inProgressCount, icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
            { label: "Resolved", value: resolvedCount, icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50" },
            { label: "Avg Response", value: `${avgResponseTime}m`, icon: ArrowUpRight, color: "text-navy", bg: "bg-blue-50" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-cream-dark">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-heading font-bold text-navy-dark">{s.value}</p>
              <p className="text-sm text-navy-dark/40">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 border border-cream-dark flex flex-wrap items-center gap-4">
          <Filter className="w-4 h-4 text-navy-dark/40" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-navy-dark/40 font-medium">Severity:</span>
            {(["all", "critical", "high", "medium", "low"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSeverityFilter(s)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  severityFilter === s
                    ? "bg-navy text-white"
                    : "bg-cream text-navy-dark/50 hover:bg-cream-dark"
                }`}
              >
                {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-cream-dark" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-navy-dark/40 font-medium">Status:</span>
            {(["all", "open", "in_progress", "resolved", "escalated"] as const).map(
              (s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    statusFilter === s
                      ? "bg-navy text-white"
                      : "bg-cream text-navy-dark/50 hover:bg-cream-dark"
                  }`}
                >
                  {s === "all"
                    ? "All"
                    : s === "in_progress"
                    ? "In Progress"
                    : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        {/* Issue List */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl p-12 border border-cream-dark text-center">
              <CheckCircle2 className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <p className="text-navy-dark/50">No issues match your filters</p>
            </div>
          )}

          {filtered.map((issue) => {
            const sc = SEVERITY_COLORS[issue.severity];
            const deal = mockDeals.find((d) => d.id === issue.dealId);

            return (
              <div
                key={issue.id}
                className="bg-white rounded-2xl p-6 border border-cream-dark hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${sc.dot}`} />
                    <span className={`text-xs font-bold uppercase ${sc.text} ${sc.bg} px-2 py-0.5 rounded-full`}>
                      {issue.severity}
                    </span>
                    <span className="text-xs text-navy-dark/30 bg-cream px-2 py-0.5 rounded-full">
                      {ISSUE_CATEGORY_LABELS[issue.category]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        issue.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : issue.status === "escalated"
                          ? "bg-red-100 text-red-700"
                          : issue.status === "in_progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {issue.status === "in_progress" ? "In Progress" : issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                    </span>
                    <span className="text-xs text-navy-dark/30">
                      {timeAgo(issue.createdAt)}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-navy-dark mb-1">
                  {issue.title}
                </h3>
                <p className="text-sm text-navy-dark/50 mb-4">{issue.description}</p>

                <div className="flex items-center justify-between">
                  {deal && (
                    <Link
                      href={`/dashboard/deals/${deal.id}`}
                      className="text-xs text-gold hover:text-gold-dark font-medium inline-flex items-center gap-1"
                    >
                      {deal.car.make} {deal.car.model} ({deal.id})
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                  {issue.responseTimeMinutes !== null && (
                    <span className="text-xs text-navy-dark/30 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Response: {issue.responseTimeMinutes}m
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
