import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '我的 AI 全栈转型之路',
  description: '10 年前端 · 转 AI 前端全栈',
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <nav style={{ display: "flex", gap: '1rem' }}>
          <Link href='/'>首页</Link>
          <Link href='/server-demo'>Sever演示</Link>
          <Link href='/client-demo'>客户端演示</Link>

        </nav>
        {children}
      </body>
    </html>
  );
}

