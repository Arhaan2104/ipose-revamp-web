import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream">
      <DashboardSidebar />
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}
