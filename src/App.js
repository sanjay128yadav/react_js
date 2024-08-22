import React from 'react'
import './App.css';
import Email from './Email';

export default function App() {
  return (    
      <div className='App'>

        <h4>useid React Hook</h4>

        {/* Example 1 */}

        <Email /> 

        <article>
        React useId Hook is introduced for the ReactJS versions above 18. This hook generates unique IDs i.e, returns a string that is stable across both the server and the client sides.
        React useId Hook is introduced for the ReactJS versions above 18. This hook generates unique IDs i.e, returns a string that is stable across both the server and the client sides.
        </article>
        
        <Email /> 
      </div>    
  )
}
