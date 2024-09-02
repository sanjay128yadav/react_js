import { useState } from 'react' 
import './App.css'

function App() { 
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if(inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_,i)=> i !== index));
  }

  return (
    <>
       <div>
        <h2>Dynamic List</h2>
        <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Enter Item' />
        <button onClick={addItem}>Add Item</button>
       </div> 

       <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={()=> removeItem(index)}>Remove</button>
          </li>
        ))}
       </ul>
    </>
  )
}

export default App
