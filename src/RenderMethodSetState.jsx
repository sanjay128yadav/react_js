import React, { Component } from 'react'

export default class RenderMethodSetState extends Component {

    constructor() {
        super();
        this.state = {
            email: "sky@b2cdev.com",
        }

    }
  render() {
    console.log("Render Method Using Set State", this.state.email);
    return (
      <>
      <h2>Render Method Using Set State: {this.state.email}</h2>
      <button onClick={()=>this.setState({email:"monu@gmail.com"})}>Update Email</button>
      </>
    )
    
  }
}
