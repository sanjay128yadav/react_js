import React from 'react'
import './App.css'

import {Table, Container, Row , Col} from "react-bootstrap";

export default function App() {

  // Example 1 

  const countriesWithCities = [
    {
      country: "India",
      cities: ["Kanpur","Nagpur","Noida","Ghaziabad","Meerut","Varansi"]
    },
    {
      country: "Pakistan",
      cities: ["Karachi","Islamabad","Lahoure"]
    },
    {
      country: "BanglaDesh",
      cities: ["Dhanka","Meerpur"]
    },
    {
      country: "Nepal",
      cities: ["Kathmandu"]
    },
  ];

  // Example 2

  const nestedData = [
    {category: "Fruits", items: ["Apple", "Banana", "Orange", "Mango","Govava"]},
    {category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach", "Potato","Tomato"]},
    {category: "Drinks", items: ["Water", "Juce", "Tea", "Cofee","Coldrinks"]}
  ];

  return (
    <>
      <div className='App'>
        <h2>Nested Map Function In React</h2>
        {/* Example 1 */}

        <ul>
          {countriesWithCities.map((countryObject, index)=>(
            <li key={index}>
              <b>{countryObject.country}</b>
              <ul>
                {countryObject.cities.map((city, cityIndex)=>(
                  <li key={cityIndex}>
                    {city}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Example 2 */}

        <Container>
            <Row>
                <Col md={9}>
                    <Table className='table'>
                        <thead>
                          <tr>
                              <th>Category</th>
                              <th>Items</th>                              
                          </tr>
                        </thead>
                        <tbody>
                            {nestedData.map((data, index)=>(
                              <tr key={index}> 
                                <td>{data.category}</td>
                                <td>
                                  <ul className='list-unstyled'>
                                    {data.items.map((item, itemIndex)=>(
                                      <li key={itemIndex}>{item}</li>
                                    ))}
                                  </ul>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

      </div>
    </>
  )
}
