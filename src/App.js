import React, {useState} from 'react'
import './App.css'
import RenderMethod from './RenderMethod'
import RenderMethodSetState from './RenderMethodSetState'

export default function App() {
  const [name, setName] = useState("Samir")
  return (
    <>
    <div className='App'>React Render Method</div>

    <RenderMethod name = {name} />

    <button onClick={() =>setName("Sanjaty Yadav")}>Update Name</button>

    <RenderMethodSetState />
    </>
    
  )
}

