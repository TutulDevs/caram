import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const players = await prisma.player.findMany();
    return NextResponse.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    return NextResponse.json(
      { error: "Error fetching players" },
      { status: 500 },
    );
  }
}
