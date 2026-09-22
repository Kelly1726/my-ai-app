import Link from "next/link";
const postsArr = [
    { id: '1', title: '我的第一篇博客', content: '今天学会了 Next.js 动态路由。' },
    { id: '2', title: 'Server vs Client', content: 'Server 跑服务器，Client 跑浏览器。' },
    { id: '3', title: '开始 AI 全栈', content: '目标：AI 前端全栈开发工程师。' },
];


async function getPosts(){
 await new Promise(r=>setTimeout(r,500))
 return postsArr
}
export default async function BlogList(){
    const data = await getPosts()
    const renderTime=new Date().toLocaleTimeString()
    return (
        <div>
            <h1>页面渲染时间：{renderTime}</h1>
            <ul>
                {
                    data.map(v=>(
                        <li key={v.id}>
                            <Link href={`/blog/${v.id}`}>{v.title}</Link>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}