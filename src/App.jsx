import TaskForm from "./TaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";
function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    setList(data);
  }, []);
  function createTask(title, description) {
    setList([...list, {title, description, id: list.length}])
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList data={list} />
    </>
  );
}

export default App;
