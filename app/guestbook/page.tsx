import { prisma } from "@/lib/prisma";
import { addMessage } from "./actions";

export const dynamic = "force-dynamic";

export default async function Guestbook() {
    const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <div className="max-w-2xl mx-auto w-full px-4 py-10 flex-1">
            <h1 className="text-2xl font-bold mb-1">留言板</h1>
            <p className="text-sm text-gray-500 mb-6">登录后即可留言</p>

            <form action={addMessage} className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
                <textarea name="content" placeholder="写点什么..." required
                    className="w-full min-h-24 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y text-sm" />
                <div className="flex justify-end">
                    <button type="submit"
                        className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                        发表留言
                    </button>
                </div>
            </form>

            {messages.length === 0 ? (
                <p className="text-center text-gray-400 py-10">还没有留言，来抢沙发</p>
            ) : (
                <ul className="space-y-3">
                    {messages.map(m => (
                        <li key={m.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-semibold text-gray-800">{m.name}</span>
                                <span className="text-xs text-gray-400">{new Date(m.createdAt).toLocaleString()}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{m.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
