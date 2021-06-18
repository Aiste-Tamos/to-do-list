import React, { useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

import './app.css';

function App() {
  
  const [ todos, setTodos ] = useState([]);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setTodos(newTodos);
  }

  const addTask = (userInput ) => {
    let copy = [...todos];
    copy = [...copy, { id: todos.length + 1, task: userInput}];
    setTodos(copy);
  }

  return (
    <div className="app">
      <ToDoForm addTask={addTask}/>
      <ToDoList todos={todos} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
