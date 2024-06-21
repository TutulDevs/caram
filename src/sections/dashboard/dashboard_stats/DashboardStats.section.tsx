import {
  getPlayersCount,
  getTournamentCount,
} from "@/src/lib/helpers/api_call";
import cn from "classnames";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiGameLine } from "react-icons/ri";
import { DashboardStatItem } from "./DashboardStatItem.section";

export const DashboardStats: React.FC<{ className?: string }> = async ({
  className,
}) => {
  try {
    const playerCount = await getPlayersCount();
    const tournamentCount = await getTournamentCount();

    // console.log("dash: ", { players, tournamentCount });

    return (
      <div
        className={cn(
          "stats stats-vertical md:stats-horizontal shadow w-full",
          className,
        )}
      >
        <DashboardStatItem
          title="Total Players"
          value={playerCount}
          classNameIcon="text-primary"
          classNameValue="text-primary"
          icon={<PiUsersThreeBold className="w-8 h-8 stroke-current" />}
        />

        <DashboardStatItem
          title="Total Tournaments"
          value={tournamentCount}
          classNameIcon="text-secondary"
          classNameValue="text-secondary"
          icon={<RiGameLine className="w-8 h-8 stroke-current" />}
        />
      </div>
    );
  } catch (err) {
    return (
      <div
        className={cn(
          "stats stats-vertical md:stats-horizontal shadow w-full",
          className,
        )}
      >
        <DashboardStatItem
          title="Total Players"
          value={0}
          classNameIcon="text-primary"
          classNameValue="text-primary"
          icon={<PiUsersThreeBold className="w-8 h-8 stroke-current" />}
          err="Not Found!"
        />

        <DashboardStatItem
          title="Total Tournaments"
          value={0}
          classNameIcon="text-secondary"
          classNameValue="text-secondary"
          icon={<RiGameLine className="w-8 h-8 stroke-current" />}
          err="Not Found!"
        />
      </div>
    );
  }
};
