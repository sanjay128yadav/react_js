import React, {useState} from 'react'
import './App.css'
import ChildComponent from './ChildComponent';

export default function App() {

  // Example 1
  const [count, setCount] = useState(0);
  console.log("Parent");
  return (
    <>
      <div className='App'>
        <h2>Memo In React.</h2>

        <ChildComponent />

        <h6>Counter: {count}</h6>
        <button onClick={()=>setCount(count+1)}>Update</button>
      </div>
    </>
  )
}
