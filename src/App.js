import React, {useState} from 'react'
import './App.css'
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

export default function App() {

  const [sharedSate, setSharedState] = useState("");

  const handleChange = (newValue)=>{
    console.log("I am in Parent Component: ", newValue);
    setSharedState(newValue);
  }

  // Example 2

  const parentAlert = (data)=>{
    alert("I am from Parent Component: "+data.name);
    console.log(data);
  }

  return (
    <>
    <div className='App'>
      <h2> Lifting State UP In React</h2>

      <ChildComponentA sharedSate={sharedSate} handleChange = {handleChange} />
      <ChildComponentB sharedSate={sharedSate} alert={parentAlert} />
    </div>
    </>
  )
}
