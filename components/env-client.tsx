"use client";

export default function EnvClient() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-gray-800 mb-3">环境变量（浏览器视角）</h2>
            <p className="text-sm">NEXT_PUBLIC_SITE_NAME: <code>{process.env.NEXT_PUBLIC_SITE_NAME}</code></p>
            <p className="text-sm">SERVER_SECRET: <code>{String(process.env.SERVER_SECRET)}</code></p>
            <p className="text-xs text-gray-500 mt-3">客户端组件只能看到 NEXT_PUBLIC_ 前缀的变量</p>
        </div>
    );
}
