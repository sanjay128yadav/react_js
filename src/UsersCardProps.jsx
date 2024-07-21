import React from 'react'

export default function UsersCardProps(props) {
    console.log(props);
    const {name, age, email} = props;
  return (
    <>
    <h4>Hello {props.name}</h4>

    // Example 2
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Email: {email}</p>

    </>
  )
}
