import React, { Component, createRef } from 'react'
import './App.css'

export default class App extends Component {

 constructor() {
  super();
  this.myInputRef = createRef();
 } 

 // Example 2

 /* componentDidMount() {
  this.myInputRef.current.value = "Sanjay Yadav";
  console.log(this.myInputRef.current.value); 
 } */

  // Example 2

  handleClick = () => {
    this.myInputRef.current.focus();
    this.myInputRef.current.style.background ="green";
    this.myInputRef.current.style.color ="White";
    console.log(this.myInputRef.current.value);
  }


  render() {
    /* console.log(this.myInputRef); */
    return (
      <>
        <div className='App'>
          <h2>Class Ref In React</h2>
          <input type='text' ref={this.myInputRef} />
          <button onClick={this.handleClick}>Focus Input</button>
        </div>
      </>
    )
  }
}
