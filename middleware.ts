import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname.startsWith("/guestbook")) {
        const loginUrl = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(loginUrl);
    }
});

export const config = {
    matcher: ["/guestbook/:path*"],
};
