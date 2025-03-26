import React from 'react'

import style from './todo.module.css'


export default function Todo(props) {
const {id} = props
  const handleDelete = (id) => {
    props.onRemoveTodo(id)
  }

  return (
    <article className={style.todo}>
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.desc}</p>
      </div>
      <div>
        <button onClick={()=>{handleDelete(id)}} className={style.btn}>
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
    </article>
  )
}
