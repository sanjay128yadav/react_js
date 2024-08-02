import React, { Component } from 'react'
import './App.css'

export default class Unmount extends Component {

  componentDidMount() {
    this.intervalid = setInterval(()=>{
        console.log("Interval Tick");
    }, 1000)
  }  

  componentWillUnmount(){
    clearInterval(this.intervalid)
    console.log("Interval Tick Removed");
  }
  render() { 
    return (
        <>
            <div className='App'>
                <h2>Children Component Will Unmount</h2>
            </div>
        </>
    )
  }
}
