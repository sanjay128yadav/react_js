import React from 'react'

export default function Students(prop) {
    console.log(prop);
  return (
    <>
        <div>Students Details</div>
        {/* Example 1*/}

        <button onClick={prop.handleClick}>Click me</button>
        <p>Count: {prop.count}</p>
        <button onClick={prop.increment}>Increment</button>
    </>
  )
}
