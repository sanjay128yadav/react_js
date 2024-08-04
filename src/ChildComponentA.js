import React from 'react'

export default function ChildComponentA({sharedSate, handleChange}) {

    // Example 1
    const handleInputChange = (event)=>{
        const newValue = event.target.value;
        handleChange(newValue);
    }

  return (
    <>
        <h4>Now i am in Component A:</h4>
        <input type='text' value={sharedSate} onChange={handleInputChange} />
    </>
  )
}
