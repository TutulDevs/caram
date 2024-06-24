import { authOptions } from "@/src/lib/config/authOptions";
import { getServerSession } from "next-auth";
import { delayPromise } from "./corefunctions";

const basePath = process.env.BASE_API_URL;

export const getPlayersAll = async () => {
  // await delayPromise(15)  // just to test

  const res = await fetch(basePath + "/players/all");
  if (!res.ok) {
    throw new Error("Failed to fetch players");
  }
  const players = await res.json();

  return players;
};

export const getPlayersCount = async () => {
  // await delayPromise(15)  // just to test

  const res = await fetch(basePath + "/players/count");
  if (!res.ok) {
    throw new Error("Failed to fetch players");
  }
  const players = await res.json();

  return players.count;
};

export const getTournamentCount = async () => {
  const res = await fetch(basePath + "/tournaments/count", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch tournaments");
  }
  const tournaments = await res.json();

  return tournaments.count;
};

export const getAuthInfo = async () => {
  const session = await getServerSession(authOptions);

  return {
    isLoggedIn: !!session,
    user: session?.user ? session.user : null,
  };
};

export const getPointTable = async () => {
  // await delayPromise(10);
  const res = await fetch(basePath + "/point-table", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch point table");
  }
  const pointTable = await res.json();

  return pointTable;
};
