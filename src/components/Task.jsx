import "../styles.css";

export default function Task(props) {
  const task = props.taskContent;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleCompleted(task);
  }

  return (
    <div className="taskListContainer">
      <span className="taskContentContainer">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          value={task.completed}
        />
        {task.completed ? <del>{task.taskContent}</del> : task.taskContent}
      </span>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}
