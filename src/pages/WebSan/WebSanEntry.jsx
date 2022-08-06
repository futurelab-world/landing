import { useNavigate } from 'react-router-dom'
import  './WebSanEntry.css'

export const WebSanEntry = () => {
    const navigate = useNavigate()

    return (
    <div 
    style={{height: '500px', width: '100%'}}
    >
             <h1 
             className='entry-text'
           onClick={() => navigate('/welcome')}
        contenteditable spellcheck="false"
        >WEB 三</h1>
    </div>)
}