import { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types'; 

// Lazy loading
//const MyComponent = lazy(()=>import('./MyComponent'));

 const MyComponent = lazy(()=>
   new Promise((resolve)=>{
     setTimeout(()=> resolve(import('./MyComponent')), 5000);
   })
 )

// Error Boundary
const ErrorBoundary = ({children}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    }
  },[])

  return hasError ? <div>Error loading component.</div> : children;
}

// Define
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

function App() { 
  return (
    <>
      <div>
      <h1>Lazy App</h1> 
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
        </Suspense>
      </ErrorBoundary> 
    </div>
    </>
  )
}

export default App
