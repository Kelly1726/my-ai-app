const postsArr = [
   { id: '1', title: '我的第一篇博客', content: '今天学会了 Next.js 动态路由。' },
   { id: '2', title: 'Server vs Client', content: 'Server 跑服务器，Client 跑浏览器。' },
   { id: '3', title: '开始 AI 全栈', content: '目标：AI 前端全栈开发工程师。' },
];

export default async function BlogArr({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params
   await new Promise<void>((resolve, reject) => {
      setTimeout(resolve,5000)
   })

   const post = postsArr.find(p => p.id === id)
   if (!post) {
      throw new Error('找不到这篇博客')
   }

   return (
      <article>
         <h1>{post.title}</h1>
         <p>{post.content}</p>
      </article>
   )
}