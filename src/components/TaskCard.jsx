import {useContext} from 'react'
import TaskContext from '../context/TaskContext'
function TaskCard({ task, deleteTask }) {
  
  const valor = useContext(TaskContext)

  console.log(valor)
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.id}</p>
        <button
          onClick={() => deleteTask(task.id)}
          style={{ padding: "10px", backgroundColor: "pink" }}
        >
          Eliminar
        </button>
     
    </div>
  );
}

export default TaskCard;
