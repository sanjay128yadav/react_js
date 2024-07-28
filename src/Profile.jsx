import React from 'react'
import './App.css'

export default function Profile() {
    // Example 1
    const isLogin = true;

    // Example 2
    const fruits = ['Apple', 'Mango', 'Banana'];

    // Example 3

    const isAuthenticated = true;

    return <>
    
    {/* Example 1*/}
    {isLogin? <h2>Welcome User</h2>: <h2>Welcome Guest</h2>} 

    {/* Example 2*/}
    
    <div>
       { fruits.length > 0 ? (

        <ul>
            {
                fruits.map((iteam, index) => (
                    <li key={index}>{iteam}</li>
                ))
            }
        </ul>
       ) : (
        <p>No Data Found</p>
       )}
    </div>

    {/* Example 3 */}

    <div>{isAuthenticated && (
        <button onClick={()=> console.log('Log Out')}>Logout</button>
    )}</div>
    </> 
}
