import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const playerCount = await prisma.player.count();
    return NextResponse.json({ count: playerCount });
  } catch (error) {
    console.error("Error fetching player count:", error);
    return NextResponse.json(
      { error: "Error fetching player count" },
      { status: 500 },
    );
  }
}
