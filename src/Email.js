import React, {useId} from 'react'

function Email() {

    const id = useId();
  return (
    <>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input type='text' id={`${id}-name`} autoComplete='off' />
        <br></br>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input type='text' id={`${id}-email`} autoComplete='off' />
    </>
  )
}

export default Email