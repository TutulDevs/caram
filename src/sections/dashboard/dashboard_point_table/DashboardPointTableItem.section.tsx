import { PointTable } from "@prisma/client";

export const DashboardPointTableItem: React.FC<{
  item: PointTable;
  index: number;
}> = ({ item, index }) => {
  return (
    <>
      <tr className="hover">
        <td>{index}</td>
        <td>{'item.team.map((t) => t.team_name).join(", ")'}</td>
        <td>{item.matches_played}</td>
        <td>{item.matches_won}</td>
        <td>{item.matches_lost}</td>
        <td>{item.matches_tied}</td>
        <td>{item.points}</td>
        <td>{item.net_rate.toFixed(2)}</td>
      </tr>
    </>
  );
};
