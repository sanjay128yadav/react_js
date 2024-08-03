import React,{useEffect, useState} from 'react'
import './App.css'

function UserTotal(props) {

  useEffect(()=>{
    console.log("Count is"+ props.count);
  }, [props.count])  

  return (
    <>
    <div className='App'>

      <h2>Called with Props</h2>

      <h4>Count: {props.count}</h4>
      
      <h4>Total: {props.total}</h4>
    </div>
    </>
  )
}

export default UserTotal;
