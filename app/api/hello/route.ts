
import { NextResponse } from "next/server";

export async function  GET(){
    return NextResponse.json({
        message:'Hello Next',
        time:new Date().toISOString()
    })
}