import React, { useState } from "react";

import './toDoForm.css';

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput){
            addTask(userInput);
            setUserInput("");
        };
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    )
};

export default ToDoForm;
