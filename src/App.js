import React, {useState} from 'react'
import "./App.css";

export default function App() {

  const [inputVale, setInputValue] = useState("D");

  const [inputValeShow, setInputValueHide] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
    setInputValueHide(false);
  }

  return (
    <>
    <div className='App'>
      <h4>Get Input box Value: {inputVale}</h4>
      <h2>{inputValeShow ? inputVale : ""  }</h2>
        <input type='text' onChange={handleChange} />
        <button onClick={()=> setInputValueHide(true)} >Submit</button>
    </div>
    </>
  )
}
