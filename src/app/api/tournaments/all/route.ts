import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tournaments = await prisma.tournament.findMany();
    return NextResponse.json(tournaments);
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return NextResponse.json(
      { error: "Error fetching tournaments" },
      { status: 500 },
    );
  }
}
