import React, {useState, useEffect} from 'react'
import './App.css'
import { Table } from 'react-bootstrap';

function GetMethod() {

  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response);

            if(!response.ok) {
                throw new Error("Network response is not ok!!");
            }
            return response.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
            console.log(data);
        })
        .catch((error)=>console.log("Error:", error));
  }, [])

  return (
    <div>
        {
            loading ? (
                    <p>Loading...</p>
            ) : (
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((list, index)=>(
                                <tr key={index}>
                                    <td>{list.id}</td>
                                    <td>{list.title}</td>
                                    <td>{list.body}</td>
                                </tr>
                            ))
                        }                        

                    </tbody>
            </Table>

            )
        }        
    </div>
  )
}

export default GetMethod