import { useNavigate } from 'react-router-dom'
import  './WebSanEntry.css'

export const WebSanEntry = () => {
    const navigate = useNavigate()

    return (
    <div 
    style={{height: '500px', width: '100%'}}
    onClick={() => navigate('/welcome')}
    >
             <h1 
             className='entry-text'
         
        contenteditable spellcheck="false"
        >WEB 三</h1>
    </div>)
}