import React,{useEffect, useState} from 'react'
import './App.css'

function App() {

  // Example 2

  const [count, setCount] = useState(0);

  // Example 1

  useEffect(()=>{
    console.log("UseEffect  Hook Called");
  }) 

  return (
    <>
    <div className='App'>

      <h2>UseEfet Hook</h2>

      <h4>Count: {count}</h4>
      <button onClick={()=>setCount(count +1)}>Increment</button>

    </div>
    </>
  )
}

export default App;
