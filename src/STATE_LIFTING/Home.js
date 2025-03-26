import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const dummeyTodo = ["todo1", "todo2"]

 const  Home = () => {

    const [todos, setTodos] = useState(dummeyTodo)

    const handleTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        
    }

  return (
    <div>
        <NewTodo newTodo={handleTodo}/>
        <Todos todos={todos}/>

    </div>
  )
}

export default Home
