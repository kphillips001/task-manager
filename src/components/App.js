import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskListContextProvider from '../context/TaskListContent';
import "../App.css";


const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
