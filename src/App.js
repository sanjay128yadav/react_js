import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
      super();
      this.state = {
        count:0,
      }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate method called', this.state.count, nextState);
    if(nextState.count <5) {
      return true;
    }
    return false;
  }
  render() {
    console.log("Render called");
    return (
      <>
      <div className='App'>Should Component Update</div>
      <h2>Count: {this.state.count}</h2>
      <button onClick={()=> this.setState({count:this.state.count +1})}>Update State</button>
      </>
    )
  }
}
