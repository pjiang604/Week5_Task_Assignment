import { useState } from "react";
import { nanoid } from "nanoid";

export default function Form(props) {
  const [taskContent, setTaskContent] = useState([]);

  function handleInput(e) {
    const newInput = e.target.value;
    setTaskContent(newInput);
    console.log(taskContent);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { taskContent, id: nanoid() };
    console.log(newTask);
    props.addTask(newTask);
    setTaskContent("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Create your Task List!</label>
        <input type="text" onChange={handleInput} value={taskContent} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
