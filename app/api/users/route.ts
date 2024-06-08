import { db } from "@/src/lib/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  const user = await db.user.create({
    data: { username, email, password },
  });
  return NextResponse.json(user);
}
