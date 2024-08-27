import React from 'react'
import './App.css'
import GetDataApi from './GetDataApi'


function App() {
  return (    
      <div className='App'>
          <h2>Axios Library In React</h2> 

          {/* Example 1 */}

          <GetDataApi />                 
      </div>    
  )
}

export default App