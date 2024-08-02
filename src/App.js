import React, { Component } from 'react'
import './App.css'
import Unmount from './Unmount';

export default class App extends Component {
  constructor(){
      super();
      this.state = {
        count:0,
        show: true,
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
    console.log("Clicked", this.state.show);
    return (
      <>
      <div className='App'>Life Cycle Methods</div>
      <h2>Count: {this.state.count}</h2>
      <button onClick={()=> this.setState({count:this.state.count +1})}>Update State</button>

      <button onClick={()=>this.setState({show:!this.state.show})}>Remove Component</button>

      {this.state.show ? <Unmount /> : "Removed"}

      </>
    )
  }
}
