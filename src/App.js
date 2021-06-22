import React, { useState, useEffect } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

import './app.css';

function App() {

  const [ todos, setTodos ] = useState([]);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const addTask = (userInput ) => {
    let copy = [...todos];
    copy = [...copy, { id: userInput, task: userInput}];
    setTodos(copy);
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('to_do_list'));
    if (tasks) {
      setTodos(tasks);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('to_do_list', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <ToDoForm addTask={addTask}/>
      <ToDoList todos={todos} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
