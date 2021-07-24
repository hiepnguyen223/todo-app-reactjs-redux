import { createSlice } from "@reduxjs/toolkit";

const initialList = JSON.parse( localStorage.getItem('data') ) || [];

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialList,
    reducers: {
        addState: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('data', JSON.stringify(state));
        },
        deleteState: (state, action) => {
            state.splice(action.payload, 1);
            localStorage.setItem('data', JSON.stringify(state));
        },
        completeState: (state, action) => {
            state[action.payload].status = state[action.payload].status === 'new' ? 'completed' : 'new';
            localStorage.setItem('data', JSON.stringify(state));
        },
        clearState: (state) => {
            while(state.length > 0) {
                state.pop();
            }
            localStorage.removeItem('data')
        }
    }
});

const { actions, reducer } = todoSlice;

export const { addState, deleteState, completeState, clearState } = actions;
export default reducer;