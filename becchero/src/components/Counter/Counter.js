import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter