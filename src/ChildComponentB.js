import React from 'react'

export default function ChildComponentB({sharedSate, alert}) {

  // Example 2
  //const data = "Sonu Yadav";

  const data = {name:"Sonu", email:"sonu@gmail.com"}
  
  return (
    <div>
        <h4>I am in Component B using Shared State: {sharedSate}</h4>
        <button onClick={()=>alert(data)}>(Component B)Click Me </button>
    </div>
  )
}
