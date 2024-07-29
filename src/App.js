import React, {useState} from 'react'
import './App.css'
import Students from './Students'

export default function App() {

  // Example 1 Function to be passed as Props

  const handleFunctionClick = () => {
    console.log("Button Clicked");
  }

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
  }

  return (
    <>
      <div className='App'>
        <h2>Pass Function as Props</h2>

        <Students handleClick={handleFunctionClick} count={count}  increment = {increment} />
        </div>
    </>
  )
}

