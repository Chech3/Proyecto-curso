import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const capturarTitle = (e) => {
    setTitle(e.target.value);
  };

  const capturarDescription = (e) => {
    setDescription(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-700 p-10 mb-4" onSubmit={onsubmit}>
        <h1 className="font-bold text-2xl mb-2 text-white">Crea Tareas</h1>
        <input
          autoFocus
          value={title}
          onChange={capturarTitle}
          placeholder="Escribe un texto"
          className="bg-slate-300 w-full p-3 mb-2"
        />
        
        <textarea
          value={description}
          onChange={capturarDescription}
          cols="20"
          rows="1"
          className="bg-slate-300 w-full p-3 mb-2"
        ></textarea>
        <button className="bg-green-600 px-3 py-1 rounded-md">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
