import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  // Example 1
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    console.log("Constructor Called");
  }

  // Example 2

  incrementCount = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
  }

  componentDidMount() {
    console.log("componentDidMount Called");
  }
  render() {
    console.log("Render Called");
    return (
      <div className='App'>
        <h2>Life Cycle Component Did Mount Method</h2>

        {/* Example 2*/}

        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
