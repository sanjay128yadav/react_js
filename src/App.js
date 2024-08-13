import React, {useSyncExternalStore} from 'react'
import './App.css'

export default function App() {

  // Example 1
  const  width = useSyncExternalStore(
    (listner)=>{
      window.addEventListener("resize", listner);
      return() => {
        window.removeEventListener("resize", listner);
      }
    }, 
    ()=>window.innerWidth
  );

  return (
    <>
      <div className='App'>

          <h4>useSyncExternalStore React Hook</h4>
          <p>Width: {width}</p>
      </div>
    </>
  )
}
