import { DashboardPointTable } from "@/src/sections/dashboard/DashboardPointTable.section";
import { DashboardStats } from "@/src/sections/dashboard/DashboardStats.section";

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
