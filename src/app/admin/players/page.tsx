import { PlayersList } from "@/src/sections/players/PlayersList.section";
import Link from "next/link";
import { Suspense } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function PlayersPage() {
  return (
    <>
      {/* header  */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Players</h1>
        <Link
          href={"/admin/players/create"}
          className="flex items-center gap-2 btn btn-primary"
        >
          <AiOutlinePlus className="w-5 h-5" />
          Add Player
        </Link>
      </div>

      {/* list */}
      <Suspense fallback={<>Loading...</>}>
        <PlayersList />
      </Suspense>
    </>
  );
}
