import React from 'react'
import Todo from './Todo';

function TodoList(props) {
  return (
    <div className='content-wrapper'>
      <div className='todo-list-container'>
        {
          props.todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
        }
      </div>
    </div>
  )
}

export default TodoList