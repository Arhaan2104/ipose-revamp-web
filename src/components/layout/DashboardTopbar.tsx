"use client";

import { Search, Bell } from "lucide-react";

export default function DashboardTopbar({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white border-b border-cream-dark flex items-center justify-between px-8 sticky top-0 z-30">
      <h1 className="font-heading text-xl font-bold text-navy-dark">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-dark/30" />
          <input
            type="text"
            placeholder="Search deals, sellers..."
            className="w-64 pl-10 pr-4 py-2 bg-cream rounded-xl text-sm text-navy-dark placeholder:text-navy-dark/30 focus:outline-none focus:ring-2 focus:ring-gold/30 border border-transparent focus:border-gold/30"
          />
        </div>

        {/* Notification bell */}
        <button className="relative w-10 h-10 rounded-xl bg-cream flex items-center justify-center hover:bg-cream-dark transition-colors">
          <Bell className="w-5 h-5 text-navy-dark/60" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
            5
          </span>
        </button>
      </div>
    </header>
  );
}
