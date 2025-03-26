import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

export default function Todos(props) {
  return (
    <section className={style.todos}>
   {props.todos.map((todo, index) => <Todo key={todo.id} id={todo.id} todo={todo.todo} onRemoveTodo={props.onRemoveTodo}/>
        )}

    </section>
  )
}
