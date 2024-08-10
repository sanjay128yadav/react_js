import React, {useState, useCallback} from 'react'
import './App.css'
import ChildComponent from './ChildComponent';

export default function App() {

  // Normal Example 1
  const [count, setCount] = useState(0);
  console.log("Parent Rendered!");

  // Example 2

  const [count2, setCount2] = useState(0);
  const IncrementCount = useCallback(()=>{

      setCount2((prevCount)=>prevCount +1);
      console.log("useCallback called");
  },[])

  return (
      <>
          <div className='App'>
              <h4>useCallback Hook</h4>
                <h6>Count1: {count}</h6>
                <button onClick={()=>setCount(count+1)}>Increment</button>

                {/* Example 2 */}

                <h6>Count2: {count2}</h6>

                <ChildComponent increment = {IncrementCount} />
          </div>
      </>
  )
}
