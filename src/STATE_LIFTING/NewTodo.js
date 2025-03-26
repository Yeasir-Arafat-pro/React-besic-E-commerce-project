import React, { useState } from 'react'

export default function NewTodo(props) {

    const [todo, setTodo] = useState('')

    const handleNewTodo = (e) => {
        setTodo(e.target.value) 
    }
    
    const  handleSubmit= (e) => {
        e.preventDefault()
        props.newTodo(todo) 
        
    }

  return (
    <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo: </label>
        <input onChange={handleNewTodo} type="text" name='todo' value={todo} id='todo'/>
        <button type="submit">Submit</button>
    </form>
  )
}
