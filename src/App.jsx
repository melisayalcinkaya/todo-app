import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo)=>todo.id !== todoId)]);
  }
  //console.log(todos);

  return (
    <div className='App'>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveTodo = {removeTodo}/>
    </div>
  );
}

export default App;
