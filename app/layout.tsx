import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { auth, signOut } from "@/auth";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: '我的 AI 全栈转型之路',
  description: '10 年前端 · 转 AI 前端全栈',
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await auth();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-5 text-sm">
            <Link href='/' className="font-bold text-gray-900">AI 转型之路</Link>
            <Link href='/guestbook' className="text-gray-600 hover:text-gray-900 transition-colors">留言板</Link>
            <span className="flex-1" />
            {session?.user ? (
              <>
                <span className="text-gray-600">{session.user.name}</span>
                <form action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}>
                  <button type="submit"
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                    登出
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link href='/login' className="text-gray-600 hover:text-gray-900 transition-colors">登录</Link>
                <Link href='/register'
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  注册
                </Link>
              </>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
