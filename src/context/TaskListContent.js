import React, {createContext, useState } from 'react';
export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const[tasks, setTasks] = useState([
    {title: 'Read the book', id: 1},
    {title: 'Wash the Car', id: 2},
    {titlte: 'Write some code', id: 3}
  ]);

  return(
    <TaskListContext.Provider value={{tasks}} >
      {props.children}
    </TaskListContext.Provider>
  )

  return <div>Task List Context</div>
}

export default TaskListContextProvider; 