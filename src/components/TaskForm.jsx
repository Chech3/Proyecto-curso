import { useContext, useState } from "react";
import {TaskContext} from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);
  
  
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
    <form style={{ display: "flex", gap: "5px" }} onSubmit={onsubmit}>
      <label htmlFor="">Title</label>
      <input autoFocus value={title} onChange={capturarTitle} placeholder="Escribe un texto" />
      <label htmlFor="">Description</label>
      <textarea value={description} onChange={capturarDescription} cols="20" rows="1"></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
