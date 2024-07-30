import React, {Component} from 'react'

import './App.css'

class App extends Component {

  constructor() {
     super();
     console.log("Constructor Called here")
  }

  render() {
    console.log("Render Called here")
      return (
        <>
        <div className='App'>
          <h2>React Js Constructor Life Cycle Method In Class</h2>
        </div>
        </>
      )

  }
  
}

export default App;
