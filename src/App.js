import React, {useState} from 'react'
import './App.css'

export default function App() {

  /* const [count, setCount] = useState(0); */

  // Same counter Using Functional Component

  // High Order Component

  const withCounter = (WrappedComponent) => {
      return function WithCounter(props) {
        const [count, setCount] = useState(0);

        const increment = ()=>{
            setCount(count+1);
        }

        return(
            <WrappedComponent {...props} count={count} increment = {increment} />
        )

      }
  }


  const Counter = ({count, increment}) => {

      return(

          <div>
              <p>Count:{count}</p>
              <button onClick={increment}>Increment</button>
          </div>
      )

  }

  // Wrap Counter Component with the WithCounter HOC

  const CounterWithEnhancement = withCounter(Counter);

  return (
    <>
      <div className='App'>
          <h4>Higher Order Component</h4>

          {/* <span>Count: {count}</span>
          <button onClick={()=>setCount(count+1)}>Increment</button> */}

          {/* Example 2 */}

          <CounterWithEnhancement />

      </div>
    </>
  )
}
