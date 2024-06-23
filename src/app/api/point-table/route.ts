import { NextResponse } from "next/server";
import prisma from "@/src/lib/config/prisma";

export async function GET() {
  try {
    const pointTables = await prisma.pointTable.findMany({
      include: {
        tournament: true,
        team: true,
      },
    });
    return NextResponse.json(pointTables);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch point tables" },
      { status: 500 },
    );
  }
}
