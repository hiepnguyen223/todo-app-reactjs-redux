import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { IoArrowUndoCircleSharp } from "react-icons/io5";

TodoList.propTypes = {
    todoList: PropTypes.array,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onComplete: null,
    onDelete: null,
}

function TodoList({todoList, onComplete, onDelete}) {

    const handleCompleted = (idx) => {
        if(!onComplete) return;
        onComplete(idx);
    }
    const handleDelete = (idx) => {
        if(!onDelete) return;
        onDelete(idx);
    }
    return (
        <ul className="todo-list">
            {todoList.map((item, idx) => (
                <li key = {item.id} className = {item.status}>
                {item.title}
                <div className="button-container">
                    <button onClick={() => handleCompleted(idx)}> {item.status === 'new' ? <AiFillCheckCircle className="check"/> : <IoArrowUndoCircleSharp className="undo"/>} </button>
                    <button onClick={() => handleDelete(idx)}><AiFillCloseCircle className="delete"/></button>
                </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;