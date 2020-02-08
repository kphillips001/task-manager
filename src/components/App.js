import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContent';
import "../App.css";


const App = () => {
  return (
    <TaskListContextProvider>
      <div>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
