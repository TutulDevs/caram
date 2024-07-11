import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const { player_id } = data;

    if (!player_id) {
      return NextResponse.json(
        { error: "Player ID is required" },
        { status: 400 },
      );
    }

    const player = await prisma.player.delete({
      where: { player_id: parseInt(player_id, 10) },
    });

    return NextResponse.json(player, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete player" },
      { status: 500 },
    );
  }
}
