import {useContext} from 'react'
import TaskContext from '../context/TaskContext'
function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext)
  
  return (
    <div className='bg-gray-800 text-white rounded-md p-5'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-600 px-3 py-2 rounded-sm hover:bg-red-400'
          onClick={() => deleteTask(task.id)}
        >
          Eliminar Tarea
        </button>
     
    </div>
  );
}

export default TaskCard;
