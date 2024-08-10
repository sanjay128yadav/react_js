import React, {memo} from 'react'

 function ChildComponent({increment}) {
  console.log("Child component rendered!");  
  return (
    <>
        <button onClick={increment}>Increment Count</button>
    </>
  )
}

export default memo(ChildComponent);
