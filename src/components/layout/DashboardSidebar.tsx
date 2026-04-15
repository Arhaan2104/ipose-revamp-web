"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Kanban,
  AlertTriangle,
  Bell,
  User,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/pipeline", icon: Kanban, label: "Pipeline" },
  { href: "/dashboard/issues", icon: AlertTriangle, label: "Issues" },
  { href: "/dashboard/notifications", icon: Bell, label: "Notifications" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-navy-dark flex flex-col z-40">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <Link href="/" className="inline-block">
          <Logo size="sm" variant="light" />
        </Link>
        <p className="text-white/30 text-xs mt-1">Buddy Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {links.map((link) => {
          const isActive =
            link.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-gold/10 text-gold"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
              {link.label === "Issues" && (
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  3
                </span>
              )}
              {link.label === "Notifications" && (
                <span className="ml-auto bg-gold text-navy-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  5
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Buddy profile */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <User className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">
              Priya Sharma
            </p>
            <p className="text-white/40 text-xs">Senior Buddy</p>
          </div>
        </div>
      </div>

      {/* Back to website */}
      <div className="px-3 pb-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 text-white/30 hover:text-white/60 text-xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
