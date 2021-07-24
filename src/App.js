import React from 'react';
import TodoFeature from './features/TodoFeature/pages';
import './App.css';
import './responsive.scss';
import { AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <div>
      <div className="App">
        <TodoFeature />
      </div>
      <a className="my-info" href = "https://github.com/hiepnguyen223/todo-app-reactjs-redux"><AiFillGithub /></a>
    </div>
  );
}

export default App;
