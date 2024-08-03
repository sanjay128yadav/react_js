import React from 'react'
import './App.css'

// Example 2

import './style.css'

// Example 4

import Style from './style.module.css'

// Example 5

import './style.scss'

export default function App() {

  // Example 3
  const headline = {
    color: "#fff",
    backgroundColor: "blue"

  }

  return (
    <>
      <div className='App'>
        <h2> Style Type In React</h2>  
        {/* Example 1 In Line Css */}
        <h2 style={{color:"#fff", backgroundColor:"green"}}>In Line CSS Method</h2>

        {/* Example 2 Normal Css Method */}

        <h4 className='primary'>Normal CSS Method </h4>

        {/* Example 3 CSS In JS */}

        <h4 style={headline}>CSS using Js Method </h4>

        {/* Example 4 CSS In Module */}

        <h4 className={Style.title}>CSS using Module Method </h4>

        {/* Example 5 Sass & Scss */}

        <h4 className='primary-sass'>CSS using Sass & <span>Scss</span> Method </h4>

      </div>        
    </>
  )
}
