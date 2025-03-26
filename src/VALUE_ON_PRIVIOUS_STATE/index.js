
// set use state value based on previous state

import React, { useState } from 'react'

 function VALUE_ON_PRIVIOUS_STATE() {

const [count, setCount]  = useState(0)
    
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

  return (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={handleIncrement}>Increment</button>
   </div>
  )
}

export default VALUE_ON_PRIVIOUS_STATE
