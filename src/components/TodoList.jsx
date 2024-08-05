import React from 'react';
import Todo from './Todo';
import '../App.css';

function TodoList({ todos,onRemoveTodo }) {
  return (
    <div className='todo_list'>
      {
        todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo}  onRemoveTodo ={onRemoveTodo}/>
        ))
      }
    </div>
  );
}

export default TodoList;