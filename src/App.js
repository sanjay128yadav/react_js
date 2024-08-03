import React from 'react'
import './App.css'

// Bootstrap 5
//import Button from 'react-bootstrap/Button';

//import Alert from 'react-bootstrap/Alert';

import {Button, Alert} from 'react-bootstrap';

export default function App() {
  return (
    <>
    <div className='App'>
      <h2>Install Bootstrap In React Js</h2>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      <Alert variant='success'>This is single static alert</Alert>
    </div>
    </>
  )
}
