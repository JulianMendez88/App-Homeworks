import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoTitle } from '../components/TodoTitle';
import './AppUI.css';

function AppUI({

}) {
  return (
    <div className='app'>

      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo }) => (
          <><TodoList>
            {error && <p>Desesperate! hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}


            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} />
            ))}
          </TodoList><CreateTodoButton /></>
        )}
      </TodoContext.Consumer>


    </div>);
}

export { AppUI }