import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { list } = useContext(TaskContext);
  if (list.length === 0) {
    return <h1>No hay datos para mostrar</h1>;
  }
 
  return (
    <>
      <div>
        {list.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
export default TaskList;
