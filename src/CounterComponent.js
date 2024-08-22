import React from 'react'
import useCounter from './useCounter'

export default function CounterComponent() {

  //const {count, increment, decrement} = useCounter();  
  const {count, increment, decrement} = useCounter(5,2);

  return (
    <>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}
