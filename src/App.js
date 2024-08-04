import React, { Component } from 'react'
import './App.css'
import CounterPureComponent from './CounterPureComponent'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  // Example 1

  handleIncrement = ()=> {
    this.setState((prevState)=>({
      //count: prevState.count + 1
    }))
  }

  render() {
    console.log("Parent Rendered!");
    return (
      <>
        <div className='App'>
          <h2>Class Pure Component In React</h2>

          <CounterPureComponent count={this.state.count} onIncrement={this.handleIncrement} />
        </div>
      </>
    )
  }
}
