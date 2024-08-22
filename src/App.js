import React from 'react'
import './App.css'
import CounterComponent from './CounterComponent'

export default function App() {
  return (
    <>
        <div className='App'>
            <h4>Custom Hook</h4>
            {/* Example 1 */}

            <CounterComponent />
        </div>
    </>
  )
}
