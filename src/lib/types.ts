export type DealStage =
  | "lead"
  | "inspection_scheduled"
  | "inspected"
  | "ai_valuation"
  | "auction_live"
  | "bid_accepted"
  | "documentation"
  | "completed";

export type IssueSeverity = "low" | "medium" | "high" | "critical";

export type IssueCategory =
  | "pricing_dispute"
  | "battery_concern"
  | "document_issue"
  | "seller_concern"
  | "buyer_concern";

export type IssueStatus = "open" | "in_progress" | "resolved" | "escalated";

export type NotificationType = "bid" | "issue" | "stage_change" | "system";

export interface BatteryHealth {
  stateOfHealth: number;
  dcInternalResistance: number;
  cycleCount: number;
  thermalStability: "excellent" | "good" | "fair" | "poor";
  estimatedRange: number;
  degradationRate: number;
  cellBalanceScore: number;
  lastDiagnosticDate: string;
}

export interface CarListing {
  id: string;
  make: string;
  model: string;
  year: number;
  variant: string;
  color: string;
  vin: string;
  registrationNumber: string;
  odometerKm: number;
  ownerCount: number;
  listPrice: number;
  aiValuation: number | null;
  finalSalePrice: number | null;
  imageUrl: string;
  batteryHealth: BatteryHealth;
}

export interface Seller {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  avatarUrl: string;
}

export interface Deal {
  id: string;
  car: CarListing;
  seller: Seller;
  buddyId: string;
  stage: DealStage;
  createdAt: string;
  updatedAt: string;
  stageHistory: { stage: DealStage; enteredAt: string }[];
  bids: Bid[];
  issues: Issue[];
  notes: string;
}

export interface Bid {
  id: string;
  dealerId: string;
  dealerName: string;
  amount: number;
  timestamp: string;
  status: "pending" | "accepted" | "rejected" | "expired";
}

export interface Issue {
  id: string;
  dealId: string;
  category: IssueCategory;
  severity: IssueSeverity;
  title: string;
  description: string;
  status: IssueStatus;
  createdAt: string;
  resolvedAt: string | null;
  responseTimeMinutes: number | null;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  dealId: string | null;
  read: boolean;
  timestamp: string;
}

export interface KPIData {
  activeDeals: number;
  conversionRate: number;
  avgTimeToSaleDays: number;
  monthlyRevenue: number;
  totalListings: number;
  auctionsLive: number;
}
