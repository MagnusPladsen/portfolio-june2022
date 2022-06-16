import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: ['Water plants', 'Wash clothes', 'Shopping'],
        isLoading: false,
        hasError: false
    },
    reducers: {
        getTodos: (state, action) => {
            return state.todos
        },
        getTodo: (state, action) => {
            return state.todos[action.payload]
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action, index) => {
            state.todos.splice(index, 1)
        },
    }
})

export const selectTodos = state => state.todo.todos;
export const { getTodos, getTodo, addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
