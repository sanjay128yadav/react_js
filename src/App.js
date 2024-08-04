import React from 'react'
import './App.css'
import ReusableButton from './ReusableButton'
import ReusableList from './ReusableList';

export default function App() {

  // Example 1
  const handleButtonClick = ()=> {
    console.log("Button Clicked!");
  };

  // Example 2
  const countries = ["USA", "Kanada","France","Australia"];

  return (
    <>
      <div className='App'>
          <h2> Reuse Component In React Js</h2>

          {/* Example 1 */}

          <ReusableButton text="Cleck Me" onClick={handleButtonClick} />
          <ReusableButton text="Submit" onClick={handleButtonClick} />

          {/* Example 2 */}

          <ReusableList items = {countries} />
      </div>
    </>
  )
}
