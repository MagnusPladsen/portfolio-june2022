import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, getTodo, addTodo } from "../Features/todos";

export default function Todo() {

    const handleTodo = (e) => {
        e.preventDefault();

    }

    return (
        <div className="grid-item">
            <h2>What´s on your mind?</h2>
            <input id="todo-input" type="text" placeholder="Type something..." />
        </div>
    )
}