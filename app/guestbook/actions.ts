'use server';

import { messages } from "./data";
import { revalidatePath } from "next/cache";

export async function addMessage(formData: FormData) {
    const name = formData.get('name')?.toString() || '匿名'
    const content = formData.get('content')?.toString() || ''
    messages.push({ id: Date.now(), name, content })
    revalidatePath('/guestbook')

}