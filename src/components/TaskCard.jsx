function TaskCard({task}) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.id}</p>
    </div>
  );
}

export default TaskCard;
