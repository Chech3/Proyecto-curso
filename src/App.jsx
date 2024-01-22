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
    setList([...list, { title, description, id: list.length }]);
  }

  function deleteTask(taskId) {
    setList(list.filter((filtrados) => filtrados.id !== taskId ))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList deleteTask={deleteTask} data={list} />
    </>
  );
}

export default App;
