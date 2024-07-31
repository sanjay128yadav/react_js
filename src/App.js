import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  // Example 1
  constructor() {
    super()
    this.state = {
      name: "Samir",
      count: 0,
    }
    //console.log("Constructor Called");
  }

  // Example 1
  componentDidUpdate(prevProps, prevState) {
    //console.log("Component Did Update Called");

    console.log(prevState.count, this.state.count);

    if (this.state.count, prevState.count){
        alert("Working");
        console.log("Component Did Update Called", prevState.count, this.state.count);
    }
  }
  
  render() {
    //console.log("Render Called");
    return (
      <div className='App'>
        <h2>Life Cycle Component Did Update Method</h2>
        <h4>Count: {this.state.count}</h4>

        <button onClick={()=>this.setState({name:"Sanjay Yadav"})}>Update State</button>

        <button onClick={()=>this.setState({count: this.state.count + 1})}>Increment</button>

      </div>
    )
  }
}

