import React, {useState} from 'react'

import './App.css'

export default function App() {

  const [inputValue, setInputValue] = useState("");

  const handleCahage = (e)=>{
    setInputValue(e.target.value);
    console.log(e.target.value, inputValue);
  }

  return (
    <>
      <div className='App'>Controled Component</div>

      <input type='text' value={inputValue} onChange={handleCahage} />
      <h4>{inputValue}</h4>
    </>
  )
}
