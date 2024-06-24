import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, status, github, twitter, team_id } = data;

    const player = await prisma.player.create({
      data: {
        name,
        status,
        github,
        twitter,
        team_id: team_id ? parseInt(team_id, 10) : undefined,
      },
    });

    return NextResponse.json(player, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create player" },
      { status: 500 },
    );
  }
}
