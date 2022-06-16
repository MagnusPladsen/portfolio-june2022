import React from 'react';
import { selectTodos, removeTodo, getTodos } from '../Features/todos';
import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    return (
        <div className="grid-item todo-container">
            {todos.map((todo, index) => (
                <div className="todo-tile" key={index} onClick={() => dispatch(removeTodo(index))}>{todo}
                <span className="todo-remove">X</span>
                </div>
            ))}
        </div>
    )
}