
// set use state value based on previous state

import React, { useState } from 'react'

 function EVENT_BUBLING_WITH_STOP_PROPAGATION() {

const [count, setCount]  = useState(0)

const handleParantClick = (event) => {
  console.log("Parant event: ", event);
}
    
    const handleChildClick = (event) => {
      event.stopPropagation() //stop propagation
      console.log("Child event: ", event);
      
        setCount(prevCount => prevCount + 1)


    }

  return (
   <div className='parentClass' onClick={handleParantClick}>
     <h1>Count: {count}</h1>
     <button className='childClass' onClick={handleChildClick}>Increment</button>
   </div>
  )
}

export default EVENT_BUBLING_WITH_STOP_PROPAGATION
