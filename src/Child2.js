import React, { useContext } from 'react'

import { myContext } from './App'

export default function Child2() {
    const sharedData = useContext(myContext);
    console.log(sharedData);
  return (
    <>
        <h6>Child 2 Component</h6>
    </>
  )
}
