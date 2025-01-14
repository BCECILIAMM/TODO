import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import React from "react";
import { TodoItem } from "./components/TodoItem";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso de intro de Reac.js", completed: false },
  { text: "Llorar con la lloronaaa", completed: false },
  { text: "LALALALALAA", completed: false },
  { text: "LALALAcLALAA", completed: false },
];
// import { TodoItem } from "./components/TodoItem";
function App() {
  return (
    // <div className="App">
    // React.Fragment
    <>
    <header></header>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <CreateTodoButton />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>


     
    </>
    // </div>
  );
}


export default App;
