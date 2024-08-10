import React, {createContext} from 'react'
import './App.css'
import Child1 from './Child1'

// Create , provider, useContext

const myContext = createContext();

 function App() {  

  const sharedData = "Hello from parent!!";

  return (
      <>
          <div className='App'>
              <myContext.Provider value={sharedData}>

                  {/* Example 1 */}
                  <h4>useContext Hook</h4>
                  <Child1 />
              </myContext.Provider>
          </div>
      </>
  )
}

export default App;
export {myContext}
