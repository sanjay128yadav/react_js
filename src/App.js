import React from 'react'
import './App.css'

import Table from 'react-bootstrap/Table';

export default function App() {
  // Example 1

  const dataTable = [
    {id:1, name:"Madan", age:22, location:"Noida"},
    {id:2, name:"Ramesh",age:23, location:"Ghaziabad"},
    {id:3, name:"Sunil", age:24, location:"Kanpur"},
    {id:4, name:"Rahul", age:25, location:"Lucknow"},
    {id:5, name:"Mohan", age:26, location:"Varansi"},
  ]
  return (
    <>
    <div className='App'>
      <h2>Bootstrap Table In React </h2>
      <div>
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr> 
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((data)=>(
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.location}</td>
                </tr>
              ))}
            </tbody>
        </Table>
      </div>
    </div>
    </>
  )
}
