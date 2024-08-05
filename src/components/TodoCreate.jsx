import React, { useState } from 'react';
import '../App.css';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo
    };
    onCreateTodo(request);
    setNewTodo(''); // Girdiyi temizle
  };

  return (
    <div className='todo-create'>
      <div className='input'>
        <input 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} 
          type='text' 
          placeholder='To-do Add'
        />
      </div>
      <div className='btn'>
        <button onClick={createTodo}>Ekle</button>
      </div>
    </div>
  );
}

export default TodoCreate;
