import { DashboardPointTable } from "@/src/sections/dashboard/DashboardPointTable.section";
import { DashboardStatCardSkeleton } from "@/src/sections/dashboard/dashboard_stats/DashboardStatCardSkeleton.section";
import { DashboardStats } from "@/src/sections/dashboard/dashboard_stats/DashboardStats.section";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <>
      {/* stats */}
      <Suspense fallback={<DashboardStatCardSkeleton />}>
        <DashboardStats className="mt-4" />
      </Suspense>

      {/* point table */}
      <DashboardPointTable className="mt-8 py-12" />
    </>
  );
}
