import {useState} from 'react'

function useCounter(initialValue = 0, steps =1) {

    const [count, setCount] = useState(initialValue);

    const increment = ()=> {
        setCount(count + steps);
    }

    const decrement = ()=> {
        setCount(count - steps);
    }

    return {count, increment, decrement}
  
}

export default useCounter
