import React, {useRef} from 'react'

import './App.css'

export default function App() {

  // Example 1
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();  
    console.log("First Input Value:", inputRef1.current.value);
    console.log("Second Input Value:", inputRef2.current.value);

    let input3 = document.getElementById("text3").value;
    console.log("Third Input Value:", input3);
  }

  return (
    <>
      <div className='App'>Uncontroled Component</div>

      <form onSubmit={submitForm}>

                <input type='text'  ref={inputRef1}/>
                <input type='text'  ref={inputRef2} />
                <input type='text' id='text3' />
                <button>Submit</button>
        
      </form>
    </>
  )
}
