import React,{useEffect, useState} from 'react'
import './App.css'
import UserTotal from './UserTotal';

function App() {

  // Example 2

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);

  // Example 1

  useEffect(()=>{
    console.log("After Render Total");
  },[total]) 

  useEffect(()=>{
    console.log("After Render Count");
  },[count]) 

  return (
    <>
    <div className='App'>

      <h2>UseEffect with condition  Hook</h2>

      {/*<h4>Count: {count}</h4>*/}
      <button onClick={()=>setCount(count +1)}>Update Count</button>

      {/*<h4>Total: {total}</h4>*/}
      <button onClick={()=>setTotal(total +1)}>Update Total</button>

      <UserTotal count = {count} total={total} />

    </div>
    </>
  )
}

export default App;
