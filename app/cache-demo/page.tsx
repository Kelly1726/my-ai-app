import EnvClient from "@/components/env-client";

export default async function CacheDemoPage() {
    const noStore = await fetch('http://localhost:3000/api/time', { cache: 'no-store' }).then(r => r.json())
    const forceCache = await fetch('http://localhost:3000/api/time', { cache: 'force-cache' }).then(r => r.json())
    const revalidate = await fetch('http://localhost:3000/api/time', { next: { revalidate: 10 } }).then(r => r.json())
    return (
        <div className="max-w-2xl mx-auto px-4 py-10 flex-1">
            <h1 className="text-2xl font-bold mb-1">缓存实验</h1>
            <p className="text-sm text-gray-500 mb-8">同一个接口，三种缓存策略——刷新页面对比三个时间</p>

            <div className="space-y-4">
                <Card title="no-store（实时）" desc="每次刷新都重新请求，时间每次不同" time={noStore.iso} />
                <Card title="force-cache（固定）" desc="第一次请求后缓存，刷新不变" time={forceCache.iso} />
                <Card title="revalidate: 10（10秒）" desc="10 秒内固定，超过 10 秒刷新会更新" time={revalidate.iso} />
            </div>
            <div className="mt-10 space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <h2 className="font-semibold text-gray-800 mb-3">环境变量（服务端视角）</h2>
                    <p className="text-sm">NEXT_PUBLIC_SITE_NAME: <code>{process.env.NEXT_PUBLIC_SITE_NAME}</code></p>
                    <p className="text-sm">SERVER_SECRET: <code>{process.env.SERVER_SECRET}</code></p>
                    <p className="text-xs text-gray-500 mt-3">服务端两个都能读到</p>
                </div>
                <EnvClient />
            </div>
        </div>

    );

}

function Card({ title, desc, time }: { title: string; desc: string; time: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-gray-800">{title}</h2>
            <p className="text-xs text-gray-500 mt-1 mb-3">{desc}</p>
            <p className="text-xl font-mono text-blue-600">{time}</p>


        </div>
    );
}