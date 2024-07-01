import { getPointTable } from "@/src/lib/helpers/api_call";
import cn from "classnames";
import { DashboardPointTableItem } from "./DashboardPointTableItem.section";
import { PointTable } from "@prisma/client";
import { Suspense } from "react";
import { DashboardPointTableSkeleton } from "./DashboardPointTableSkeleton.section";

export const DashboardPointTable: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn(className)}>
      <h2 className="text-center text-xl md:text-4xl mb-6">Point Table</h2>

      <div className="overflow-x-auto border border-primary/30 rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Match</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>Point</th>
              <th>Net Rate</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<DashboardPointTableSkeleton />}>
              <TableBody />
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableBody = async () => {
  try {
    const list: PointTable[] = await getPointTable();

    return list.length == 0 ? (
      <tr>
        <td className="text-accent text-center" colSpan={8}>
          No Items in the table
        </td>
      </tr>
    ) : (
      list.map((item, idx) => (
        <DashboardPointTableItem key={item.point_table_id} item={item} index={idx + 1} />
      ))
    );
  } catch (error: any) {
    return (
      <tr>
        <td className="text-accent text-center" colSpan={8}>
          {error?.message}
        </td>
      </tr>
    );
  }
};

const listB = [
  {
    id: "1",
    team: {
      title: "TB",
      playerOne: "Taz",
      playerTwo: "Bacchu",
      played: 9,
      won: 7,
      lost: 2,
      tied: 0,
      point: 21,
      net_rate: 64,
    },
  },
  {
    id: "2",
    team: {
      title: "NS",
      playerOne: "Noman",
      playerTwo: "Sadid",
      played: 10,
      won: 6,
      lost: 3,
      tied: 1,
      point: 19,
      net_rate: 67,
    },
  },
  {
    id: "3",
    team: {
      title: "JS",
      playerOne: "Jasim",
      playerTwo: "Shafayet",
      played: 10,
      won: 6,
      lost: 4,
      tied: 0,
      point: 18,
      net_rate: 74,
    },
  },
];
