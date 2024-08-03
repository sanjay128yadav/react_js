import React from 'react'
import './App.css'

export default function App() {
  // Example 1

  const names = ["Samir", "Anil", "Navneet", "Saurabh"];

  //Example 2 Array of objects

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      price: 200
    },
    {
      id: 3,
      name: "Product 3",
      price: 300
    }
  ]

  // Example 3 Return map method

  const fruits = ["Apple", "Banana", "Orange", "Govava", "Mango"];

  // Using map to transform the array of fruits into an array of react element

  const fruitsIteam = fruits.map((fruit, index)=> <li key={index}>{fruit}</li>)

  return (
    <>
    <div className='App'>
      <h2>Array with Map Function</h2>

      {/* Example 1 */}

      <ul>
        {
          names.map((name, index)=>(
            <li key={index}>{name}</li>
          ))
        }
      </ul>

      {/* Example 2 */}

      <ul>
        {
          products.map((product)=>(
            <li key={product.id}>{product.name}-{product.price}$</li>
          ))
        }
      </ul>

        {/* Example 3 */}

        <ul>{fruitsIteam}</ul>

    </div>
    </>
  )
}
