import React, {useState, useMemo} from 'react'
import './App.css'

export default function App() {

  // Example 1
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  /* const sum = ()=> {
    console.log("Calculating Sum...!");
    return number1 + number2;
  } */

    const sum = useMemo(()=> {
      console.log("Calculating Sum...!");
      return number1 + number2;
    }, [number1, number2])  

  return (
    <>
      <div className='App'>
        <h2>React useMemo Hook</h2>
        {/* Example 1 */}

        <input type='number' value={number1} onChange={(e)=>setNumber1(Number(e.target.value))} />
        <input type='number' value={number2} onChange={(e)=>setNumber2(Number(e.target.value))} />


        {/* Example 1
         <p>Sum: {sum()}</p> */}

        {/* Example 2 */}

        <p>Sum Using useMemo: {sum}</p> 

        {/* Example 1 */}

        <h4>Count Number: {count}</h4>
        <button onClick={()=>setCount(count + 1)}>Count++</button>
      </div>
    </>
  )
}
