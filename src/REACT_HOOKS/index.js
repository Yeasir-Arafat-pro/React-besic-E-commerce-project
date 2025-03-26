import React, { useState } from 'react'

 function REACT_HOOKS() {

const [count, setCount]  = useState(0)
    
    const handleIncrement = () => {
        setCount(count + 1)
    }

  return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={handleIncrement}>Increment</button>
   </div>
  )
}

export default REACT_HOOKS
