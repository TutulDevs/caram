import NextAuth from "next-auth";
import { authOptions } from "@/src/lib/config/authOptions";

const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };
