import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./lib/prisma";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: { label: "邮箱" },
                password: { label: "密码", type: "password" },
            },
            authorize: async (credentials) => {
                const email = credentials?.email as string;
                const password = credentials?.password as string;
                if (!email || !password) return null;

                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) return null;

                const ok = await bcrypt.compare(password, user.passwordHash);
                if (!ok) return null;

                return { id: String(user.id), name: user.name, email: user.email };
            },
        }),
    ],
});
