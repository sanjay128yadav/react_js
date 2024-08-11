import React, {createContext} from 'react'
import './App.css'
import Child1 from './Child1'

// Create , provider, useContext

const myContext      = createContext();
const myContextNew   = createContext();

 function App() {  

  const sharedData = "Hello from parent!!";
  const sharedDataNew = "Hello from parent with new context!!";

  return (
      <>
          <div className='App'>
              <myContext.Provider value={sharedData}>

                <myContextNew.Provider value={sharedDataNew}>
                  {/* Example 1 */}
                  <h4>useContext Hook</h4>
                  <Child1 />
                </myContextNew.Provider>
              </myContext.Provider>
          </div>
      </>
  )
}

export default App;
export {myContext, myContextNew}
