import React, {useRef} from 'react'
import './App.css'

export default function App() {
  // Example 1
  const inputRef = useRef(null);

 // Example 2

 const handleButtonClick = () =>{
    const inputValue = inputRef.current.value;
    alert(`Input Value ${inputValue}`);
    console.log(`Input Value ${inputValue}`);
 }


  return (
    <>
      <div className='App'>
        <h2>Function based useRef Hook</h2>
        <input type='text' ref={inputRef} />
        <button onClick={handleButtonClick}>Get Input Value</button>
      </div>
    </>
  )
}
