import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [list, setList] = useState([]);

  function createTask(title, description) {
    setList([...list, { title, description, id: list.length }]);
  }
  
  function deleteTask(taskId) {
    setList(list.filter((filtrados) => filtrados.id !== taskId ))
  }

  useEffect(() => {
    setList(data);
  }, []);

  return (
    <>
        <TaskContext.Provider value={{createTask, deleteTask, list}} >
            {props.children}
        </TaskContext.Provider>
    </>
  );
}

export default TaskContext;
