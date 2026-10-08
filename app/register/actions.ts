"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function registerAction(prevState: { error?: string } | null, formData: FormData) {
    const email = formData.get("email")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";
    const name = formData.get("name")?.toString().trim() || "";

    if (!email || !password || !name) {
        return { error: "请填写完整信息" };
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
        return { error: "该邮箱已注册" };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, passwordHash, name } });

    try {
        await signIn("credentials", { email, password, redirectTo: "/guestbook" });
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: "注册成功，请到登录页登录" };
        }
        throw error;
    }

    return { error: undefined };
}
