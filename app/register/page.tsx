"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction } from "./actions";

export default function RegisterPage() {
    const [state, formAction] = useActionState(registerAction, null);

    return (
        <div className="max-w-sm mx-auto w-full px-4 py-16 flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h1 className="text-xl font-bold mb-1">创建账号</h1>
                <p className="text-sm text-gray-500 mb-6">加入留言板</p>
                {state?.error && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2 mb-4">{state.error}</p>
                )}
                <form action={formAction} className="flex flex-col gap-3">
                    <input name="name" placeholder="昵称" required
                        className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <input name="email" type="email" placeholder="邮箱" required
                        className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <input name="password" type="password" placeholder="密码" required
                        className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    <button type="submit"
                        className="mt-2 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                        注册并登录
                    </button>
                </form>
                <p className="text-sm text-gray-500 mt-5 text-center">
                    已有账号？<Link href="/login" className="text-blue-600 hover:underline">去登录</Link>
                </p>
            </div>
        </div>
    );
}
