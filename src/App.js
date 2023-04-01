import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoTitle } from './components/TodoTitle';
import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de introduccion a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <div className='app'>
      <TodoTitle />
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}

export default App;
