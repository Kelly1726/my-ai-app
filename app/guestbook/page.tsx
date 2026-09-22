import {addMessage} from './actions'
import { messages } from './data'

export default function Guestbook(){
    return (
        <div style={{padding:'2rem'}}>
            <h1>留言板</h1>
            <form action={addMessage} style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:400}}>

                <input name='name' placeholder='你的名字'></input>
                <textarea name='content' placeholder='留言内容' required></textarea>
                <button type='submit'>提交</button>
            </form>
           <ul style={{marginTop:'2rem'}}>
             {messages.map(v=>(
                <li key={v.id}><b>{v.name}</b>:{v.content}</li>
             ))}
           </ul>
        </div>
    )
}
