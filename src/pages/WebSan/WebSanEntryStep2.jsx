
import { useNavigate } from 'react-router-dom'
import  './WebSanEntry.css'

export const WebSanEntryStep2 = () => {
    // lit. if three walk together, one can be my teacher (idiom,
    //     from the Analects of Confucius)
    const navigate = useNavigate()
    return (
    <div 
    style={{height: '500px', width: '100%'}}
    onClick={() => navigate('/rooms')}
    >


<h1     
className='neon'
     style={{

     }}
  
        >
           
            三人行 (if three walk together, one can be my teacher)</h1>
    </div>)
}