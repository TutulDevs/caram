import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tournamentCount = await prisma.tournament.count();
    return NextResponse.json({ count: tournamentCount });
  } catch (error) {
    console.error("Error fetching tournament count:", error);
    return NextResponse.json(
      { error: "Error fetching tournament count" },
      { status: 500 },
    );
  }
}
