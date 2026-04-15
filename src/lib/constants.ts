import { DealStage } from "./types";

export const BRAND = {
  name: "rEVamp",
  tagline: "know your value",
  promise:
    "Premium cars deserve premium care. AI-driven fair pricing, efficient RC transfer, zero spam calls.",
} as const;

export const DEAL_STAGES: {
  key: DealStage;
  label: string;
  color: string;
  bgColor: string;
}[] = [
  { key: "lead", label: "Lead", color: "text-gray-700", bgColor: "bg-gray-200" },
  { key: "inspection_scheduled", label: "Inspection Scheduled", color: "text-blue-700", bgColor: "bg-blue-100" },
  { key: "inspected", label: "Inspected", color: "text-indigo-700", bgColor: "bg-indigo-100" },
  { key: "ai_valuation", label: "AI Valuation", color: "text-purple-700", bgColor: "bg-purple-100" },
  { key: "auction_live", label: "Auction Live", color: "text-amber-700", bgColor: "bg-amber-100" },
  { key: "bid_accepted", label: "Bid Accepted", color: "text-green-700", bgColor: "bg-green-100" },
  { key: "documentation", label: "Documentation", color: "text-teal-700", bgColor: "bg-teal-100" },
  { key: "completed", label: "Completed", color: "text-emerald-700", bgColor: "bg-emerald-100" },
];

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Battery Intelligence", href: "#battery" },
  { label: "Why rEVamp", href: "#why-revamp" },
  { label: "For Sellers", href: "#sellers" },
  { label: "The Buddy", href: "#buddy" },
];

export const ISSUE_CATEGORY_LABELS: Record<string, string> = {
  pricing_dispute: "Pricing Dispute",
  battery_concern: "Battery Concern",
  document_issue: "Document Issue",
  seller_concern: "Seller Concern",
  buyer_concern: "Buyer Concern",
};

export const SEVERITY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  low: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  medium: { bg: "bg-yellow-50", text: "text-yellow-700", dot: "bg-yellow-500" },
  high: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  critical: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
};
