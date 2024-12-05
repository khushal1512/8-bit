import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-sky-300 font-bold'>
      Team 8-bit. We provide news not views
    </div> 
    <div>
      <input type="text" 
    
      placeholder='search here'/>
      <button >go!</button>
    </div>
    </>
  )
}

export default App
