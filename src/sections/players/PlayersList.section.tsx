import { getPlayersAll } from "@/src/lib/helpers/api_call";
import { Player } from "@prisma/client";
import { PlayerSingleCard } from "./PlayerSingleCard.section";

export const PlayersList = async () => {
  try {
    const list: Player[] = await getPlayersAll();
    // console.log("list: ", list);

    return list.length == 0 ? (
      <div className="text-accent text-center">No Players Found!</div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((player) => (
          <PlayerSingleCard key={player.player_id} player={player} />
        ))}
      </div>
    );
  } catch (error: any) {
    return <div className="text-accent text-center">{error?.message}</div>;
  }
};
