"use client";

import { useState } from "react";
import DashboardTopbar from "@/components/layout/DashboardTopbar";
import { mockNotifications } from "@/lib/mock-data";
import { Notification } from "@/lib/types";
import { timeAgo } from "@/lib/utils";
import {
  Gavel,
  AlertTriangle,
  ArrowRightCircle,
  Settings,
  Bell,
  CheckCheck,
} from "lucide-react";
import Link from "next/link";

const typeIcons = {
  bid: Gavel,
  issue: AlertTriangle,
  stage_change: ArrowRightCircle,
  system: Settings,
};

const typeColors = {
  bid: "text-amber-500 bg-amber-50",
  issue: "text-red-500 bg-red-50",
  stage_change: "text-blue-500 bg-blue-50",
  system: "text-navy bg-navy/5",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [tab, setTab] = useState<"all" | "unread">("all");

  const displayed =
    tab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <>
      <DashboardTopbar title="Notifications" />
      <div className="p-8 space-y-6">
        {/* Tabs + Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-cream-dark">
            <button
              onClick={() => setTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === "all"
                  ? "bg-navy text-white"
                  : "text-navy-dark/50 hover:bg-cream"
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setTab("unread")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === "unread"
                  ? "bg-navy text-white"
                  : "text-navy-dark/50 hover:bg-cream"
              }`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-sm text-gold hover:text-gold-dark font-medium inline-flex items-center gap-1"
            >
              <CheckCheck className="w-4 h-4" />
              Mark all read
            </button>
          )}
        </div>

        {/* Notification List */}
        <div className="space-y-2">
          {displayed.length === 0 && (
            <div className="bg-white rounded-2xl p-12 border border-cream-dark text-center">
              <Bell className="w-12 h-12 text-cream-dark mx-auto mb-4" />
              <p className="text-navy-dark/40">No notifications</p>
            </div>
          )}

          {displayed.map((n) => {
            const Icon = typeIcons[n.type];
            const colorClass = typeColors[n.type];

            return (
              <div
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`bg-white rounded-xl p-5 border transition-all cursor-pointer hover:shadow-sm ${
                  n.read ? "border-cream-dark" : "border-gold/30 bg-gold/[0.02]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p
                        className={`text-sm font-semibold ${
                          n.read ? "text-navy-dark/60" : "text-navy-dark"
                        }`}
                      >
                        {n.title}
                      </p>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-navy-dark/50 mb-2">{n.message}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-navy-dark/30">
                        {timeAgo(n.timestamp)}
                      </span>
                      {n.dealId && (
                        <Link
                          href={`/dashboard/deals/${n.dealId}`}
                          className="text-xs text-gold hover:text-gold-dark font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Deal →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
