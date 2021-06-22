import React from 'react';
import ToDo from './ToDo';

import './toDoList.css';

const ToDoList = ({todos, handleDelete, handleFilter}) => {
    return (
        <div className="to-do-list">
            {todos.map(todo => {
                return (
                    <ToDo todo={todo} key={todo.id} handleDelete={handleDelete} handleFilter={handleFilter}/>
                )
            })}
        </div>
    );
};

export default ToDoList;
