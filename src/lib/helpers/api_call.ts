const basePath = process.env.BASE_API_URL;

export const getPlayersCount = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 15 * 1000));  // just to test

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
