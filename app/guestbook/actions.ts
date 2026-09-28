'use server';

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export async function addMessage(formData: FormData) {
    const name = formData.get('name')?.toString() || '匿名'
    const content = formData.get('content')?.toString() || ''
   await prisma.message.create({data:{name,content}})
    revalidatePath('/guestbook')

}