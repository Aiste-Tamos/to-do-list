import React from 'react';
import './toDo.css';
import binIcon from './images/bin.svg';
 
const ToDo = ({todo, handleDelete}) => {
    
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className="todo">
            {todo.task}
            <button className="bin-btn" onClick={() => handleDelete(todo.id)}>
                <img src={binIcon} alt=""></img>
            </button>
        </div>
        
   );
};
 
export default ToDo;