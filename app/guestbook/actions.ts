"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export async function addMessage(formData: FormData) {
    const session = await auth();
    if (!session?.user?.name) return;

    const content = formData.get("content")?.toString() || "";
    if (!content) return;

    await prisma.message.create({
        data: { name: session.user.name, content },
    });
    revalidatePath("/guestbook");
}
