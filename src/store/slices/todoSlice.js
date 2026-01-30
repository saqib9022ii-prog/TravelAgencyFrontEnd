import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState:{
        tasks: [],
    },
    reducers: {
        setTask: (state, action) => {
            state.tasks.push({input:action.payload, id:Date.now(), completed: false});
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        },
        toggleTask: (state, action) => {
            state.tasks = state.tasks.map((t) => t.id === action.payload ? {...t, completed: !t.completed} : t)
        },
        editTask: (state, action) => {
            const {id, input} = action.payload; 
            state.tasks = state.tasks.map((t) => t.id === id? {...t, input:input} : t);
        }
    },
});

export const { setTask, removeTask, toggleTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;