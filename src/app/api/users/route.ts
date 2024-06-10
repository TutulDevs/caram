import prisma from "@/src/lib/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  const user = await prisma.user.create({
    data: { username, email, password },
  });
  return NextResponse.json(user);
}
