"use server";

import { signIn } from "@/auth";

import { AuthError } from "next-auth";


export async function loginAction(preState:{error?:string} | null,formData:FormData){
    const email= formData.get('email')?.toString() || ''
    const password =formData.get('password')?.toString() || ''
    try {
        await signIn('credentials',{email,password,redirectTo:'/guestbook'})

        
    } catch (error) {
        if(error instanceof AuthError){
            return {error:'邮箱或密码错误'}
        }
        throw error

    }
    return {error:'undefined'}
}