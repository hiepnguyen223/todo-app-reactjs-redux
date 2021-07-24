import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import { addState, clearState, completeState, deleteState } from './todoSlice';
import './styles.scss';
import { AiFillPlusCircle } from "react-icons/ai";

TodoFeature.propTypes = {
   
};

function TodoFeature(props) {
    const todoList = useSelector(state => state.todo);
    console.log(todoList);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        const id = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1; 

        const item = {
            id: id,
            title: e.target.firstChild.value,
            status: 'new'
        }
        const action = addState(item);
        dispatch(action);
        e.target.firstChild.value = "";
        e.preventDefault();
    }

    const handleComplete = (idx) => {
        const action = completeState(idx);
        dispatch(action);
    }
    const handleDelete = (idx) => {
        const action = deleteState(idx);
        dispatch(action);
    }
    const handleClear = () => {
        console.log('hmu')
        const action = clearState();
        dispatch(action);
    }

    const totalPendingTask = todoList.filter(item => {
        return item.status === 'new';
    }).length;
    
    
    return (
        
        <div className = 'todo-app'>
            <h2>Todo App</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeHolder = "Enter what you want to do" required/>
                <button type="submit"><AiFillPlusCircle /></button>
            </form>
            <TodoList todoList = {todoList} onComplete = {handleComplete} onDelete = {handleDelete}/>
            <div className = "pending-task">
                <p>You have {totalPendingTask} pending {totalPendingTask > 1 ? 'tasks' : 'task' }</p>
                <button onClick = {() => handleClear()}>Clear All</button>
            </div>
        </div>
    );
}

export default TodoFeature;