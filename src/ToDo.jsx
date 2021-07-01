import React from 'react';
import './toDo.css';
import binIcon from './images/bin.svg';
 
const ToDo = ({todo, handleDelete}) => {
    
    return (
        <div id={todo.id} name="todo" value={todo.id} className="todo">
            {todo.task}
            <button className="bin-btn" onClick={() => handleDelete(todo.id)} aria-label="Delete button">
                <img src={binIcon} alt="" height="80px" width="80px"></img>
            </button>
        </div>
        
   );
};
 
export default ToDo;