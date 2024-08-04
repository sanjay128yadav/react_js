import React, {memo} from 'react'

 function ChildComponent() {
  console.log("Child component rendered!");  
  return (
    <>
        <h5>Child Component</h5>
    </>
  )
}

export default memo(ChildComponent);
