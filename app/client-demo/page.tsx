'use client';

import { useState } from 'react';

export default function ClientDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>我是 Client Component</h1>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>点我 +1</button>
    </div>
  );
}
