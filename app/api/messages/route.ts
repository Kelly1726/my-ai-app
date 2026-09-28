
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const messages =await prisma.message.findMany({orderBy:{createdAt:'desc'}})
    return NextResponse.json(messages)
}

export async function POST(request:Request) {
    const body = await request.json()
    const messages=await prisma.message.create({
        data:{name:body.name || '匿名',content:body.content || ''}
    })

    return NextResponse.json(messages,{status:201})
}