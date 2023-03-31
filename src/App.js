import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
//import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso de introduccion a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key= {todo.text} text = {todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
