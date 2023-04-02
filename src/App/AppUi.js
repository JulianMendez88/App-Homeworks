import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoTitle } from '../components/TodoTitle';
import './AppUI.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
    return ( 
    <div className='app'>
   
    <TodoTitle />

    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed} 
        onComplete = {()=> completeTodo(todo.text)}
        onDelete = {()=> deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton />

  </div>);
}

export { AppUI}