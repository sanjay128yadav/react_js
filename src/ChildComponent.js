import React, {forwardRef, useRef, useImperativeHandle} from 'react'

 function ChildComponent(props, ref) {

 const childsRef = useRef();

 const handeChildButtonClick = ()=>{
    console.log("Child Click Button Clicked");
 }

 useImperativeHandle(ref , ()=>({
  handeChildButtonClick,
 }))

  return (
    <>
      {/* Example 1 */}
      <input type='text' ref={ref} />

      {/* Example 2 */}

      <button ref={childsRef}>Click Me</button>

    </>
  )
}

export default forwardRef(ChildComponent);