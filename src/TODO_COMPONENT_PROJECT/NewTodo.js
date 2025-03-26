import React, { useState } from 'react'
import style from './newTodo.module.css'

export default function NewTodo(props) {

    const [todo, setTodo] = useState({title: "", desc: ""})

    const {title, desc} = todo

    const handleChange = (e) => {
        setTodo((oldTodo) => {
          return {...oldTodo, [e.target.name]: e.target.value}
        }) 
    }
    
    const  handleSubmit= (e) => {
        e.preventDefault()
        props.newTodo(todo) 

        setTodo({title: "", desc: ""})
        
        
    }

  return (
    <form onSubmit={handleSubmit} className={style.form} action="">
       <div className={style.formFiled}>
       <label htmlFor="todo">Title:  </label>
        <input onChange={handleChange} type="text" value={title} name='title' id='title'/>
       </div>

       <div className={style.formFiled}>
       <label htmlFor="desc">Desciption:  </label>
       <textarea onChange={handleChange} type="text" value={desc} name="desc" id="desc" />
       </div>

       <div className={style.formFiled}>
      <button type="submit">Add Todo</button>
       </div>
    </form>
  )
}
