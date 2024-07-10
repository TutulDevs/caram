import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { player_id, name, status, github, twitter, team_id } = data;

    if (!player_id) {
      return NextResponse.json(
        { error: "Player ID is required" },
        { status: 400 },
      );
    }

    const player = await prisma.player.update({
      where: { player_id: parseInt(player_id, 10) },
      data: {
        name,
        status,
        github,
        twitter,
        team_id: team_id ? parseInt(team_id, 10) : undefined,
      },
    });

    return NextResponse.json(player, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update player" },
      { status: 500 },
    );
  }
}
