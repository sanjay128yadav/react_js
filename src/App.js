import React, {useRef} from 'react'
import './App.css'
import ChildComponent from './ChildComponent'

export default function App() {
 
  // Example 1
  const inputRef = useRef(null);

  const updateInput = ()=> {
    inputRef.current.value = 10000;
    inputRef.current.style.color = 'white'
    inputRef.current.style.background = 'blue'
    inputRef.current.focus();
  }

  // Example 2

  const childRef = useRef(null);

  const handleButtonClick = ()=>{
    if(childRef.current) {

      childRef.current.handleButtonClick();

    }
  }

  return (
    <>
      <div className='App'>
          <h2>forward Ref in React</h2>
          {/* <ChildComponent ref={inputRef} />
          <button onClick={updateInput}>Update Input Value</button> */}

          {/* Example 2 */}
          <ChildComponent ref={childRef} />

          <button onClick={handleButtonClick}>Click Button from Parent</button>
      </div>
    </>
  )
}
