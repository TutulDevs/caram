import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, User as NextAuthUser } from "next-auth";
import { db } from "@/src/lib/config/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return user;
        }

        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login", // Redirect to custom login page
    error: "/login", // Redirect to custom login page with error message
  },
  callbacks: {
    async session({ session, token, user }): Promise<Session> {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions);
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
