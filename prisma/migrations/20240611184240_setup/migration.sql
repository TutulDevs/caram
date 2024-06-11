-- CreateEnum
CREATE TYPE "PlayerStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'RETIRED');

-- CreateTable
CREATE TABLE "Player" (
    "player_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "PlayerStatus" NOT NULL,
    "github" TEXT DEFAULT '',
    "twitter" TEXT DEFAULT '',
    "team_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "Team" (
    "team_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "tournament_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "session" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("tournament_id")
);

-- CreateTable
CREATE TABLE "PointTable" (
    "point_table_id" SERIAL NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "matches_played" INTEGER NOT NULL,
    "matches_won" INTEGER NOT NULL,
    "matches_lost" INTEGER NOT NULL,
    "matches_tied" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "net_rate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PointTable_pkey" PRIMARY KEY ("point_table_id")
);

-- CreateTable
CREATE TABLE "Match" (
    "match_id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "result" TEXT NOT NULL,
    "winner_team_id" INTEGER,
    "match_type" TEXT NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "team1_id" INTEGER NOT NULL,
    "team2_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("match_id")
);

-- CreateTable
CREATE TABLE "MatchScore" (
    "match_score_id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "net_rate" DOUBLE PRECISION NOT NULL,
    "match_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatchScore_pkey" PRIMARY KEY ("match_score_id")
);

-- CreateTable
CREATE TABLE "PlayerMatch" (
    "player_match_id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "performance" TEXT NOT NULL,
    "match_id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerMatch_pkey" PRIMARY KEY ("player_match_id")
);

-- CreateTable
CREATE TABLE "_PointTableToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_tournament_id_key" ON "Tournament"("tournament_id");

-- CreateIndex
CREATE UNIQUE INDEX "PointTable_tournament_id_key" ON "PointTable"("tournament_id");

-- CreateIndex
CREATE UNIQUE INDEX "_PointTableToTeam_AB_unique" ON "_PointTableToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_PointTableToTeam_B_index" ON "_PointTableToTeam"("B");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("team_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointTable" ADD CONSTRAINT "PointTable_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournament"("tournament_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "Tournament"("tournament_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_team1_id_fkey" FOREIGN KEY ("team1_id") REFERENCES "Team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_team2_id_fkey" FOREIGN KEY ("team2_id") REFERENCES "Team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winner_team_id_fkey" FOREIGN KEY ("winner_team_id") REFERENCES "Team"("team_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchScore" ADD CONSTRAINT "MatchScore_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "Match"("match_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchScore" ADD CONSTRAINT "MatchScore_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD CONSTRAINT "PlayerMatch_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "Match"("match_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerMatch" ADD CONSTRAINT "PlayerMatch_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Player"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PointTableToTeam" ADD CONSTRAINT "_PointTableToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "PointTable"("point_table_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PointTableToTeam" ADD CONSTRAINT "_PointTableToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("team_id") ON DELETE CASCADE ON UPDATE CASCADE;
