import { AddPlayerActionBtn } from "@/src/sections/players/PlayerActionBtns.section";
import { PlayersList } from "@/src/sections/players/PlayersList.section";
import { Suspense } from "react";

export default function PlayersPage() {
  return (
    <>
      {/* header  */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Players</h1>

        <AddPlayerActionBtn className="flex items-center gap-2 btn btn-primary" />
      </div>

      {/* list */}
      <Suspense fallback={<>Loading...</>}>
        <PlayersList />
      </Suspense>
    </>
  );
}
