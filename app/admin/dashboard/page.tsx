import { DashboardPointTable } from "@/sections/dashboard/DashboardPointTable.section";
import { DashboardStats } from "@/sections/dashboard/DashboardStats.section";

export default function DashboardPage() {
  return (
    <>
      {/* stats */}
      <DashboardStats className="mt-4" />

      {/* point table */}
      <DashboardPointTable className="mt-8 py-12" />
    </>
  );
}
