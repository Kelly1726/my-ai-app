'use client';

export default function Error({error,reset}:{error:Error,reset:()=>void
}){
return (
    <div style={{padding:'2rem',color:'#b91c1c'}}>
        <h1>出错了:{error.message}</h1>
        <button onClick={reset}>重试</button>
    </div>
)
}