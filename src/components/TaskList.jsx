import Task from "./Task";
import { useState } from "react";
import Form from "./Form";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
  }

  function removeTask(role) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== role.id;
    });
    setTasks(updatedTasks);
  }

  function toggleCompleted(role) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === role.id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        <div>
          {tasks.map((task) => (
            <Task
              key={tasks.id}
              taskContent={task}
              remove={removeTask}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </div>
      </ul>
      <Form addTask={addTask} />
    </div>
  );
}
