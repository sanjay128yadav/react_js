import React, {useState} from 'react'
import "./App.css";

export default function App() {
  const [status, setSataus] = useState(true);
  return (
    <div className='App'>
    <>
      <h1>Show Hide Toggle</h1>
      {status ? <div className='status'>Content</div>: null}  

      {/* Example 1 Show & Hide*/}    
      <button onClick={()=>setSataus(false)}>Hide</button>
      <button onClick={()=>setSataus(true)}>Show</button>

      {/* Example 2 Toggle*/} 
      <button onClick={()=>setSataus(!status)}>Toggle</button>
    </>  
    </div>
  )
}
