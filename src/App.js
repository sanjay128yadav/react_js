import React, {useState, useRef, useLayoutEffect} from 'react'
import './App.css'

export default function App() {

  const [width, setwidth] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(()=>{
    if(elementRef.current){
       setwidth(elementRef.current.getBoundingClientRect().width);
    }
  },[])

  return (
    <>
      <div className='App'>
            <h4>useLayoutEffect Hook in React</h4>

            <div>Width Measurement Example</div>

                <div ref={elementRef} style={{width:"550px", background:"lightblue", margin:"auto"}}>Element which width will be measur</div>
                <p>Width: {width}</p>

      </div>
    </>
  )
}
