import React from 'react'

export default function ReusableList({items}) {
  return (
    <ul>
        {items.map((item, itemIndex)=>(
            <li key={itemIndex}>{item}</li>
        ))}
    </ul>
  )
}
