import TaskCard from './TaskCard'
function TaskList({data, deleteTask}) {
  
  if (data.length === 0) {
    return <h1>No hay datos para mostrar</h1>;
  }

  return (
    <>
      <div>
        {data.map((task) => (
          <TaskCard deleteTask={deleteTask} key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
export default TaskList;
