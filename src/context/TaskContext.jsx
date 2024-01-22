import { createContext } from "react";

export const TaskContext = createContext();
let x = 20

export function TaskContextProvider(props) {
  return (
    <>
        <TaskContext.Provider value={x} >
            {props.children}
        </TaskContext.Provider>
    </>
  );
}

export default TaskContext;
