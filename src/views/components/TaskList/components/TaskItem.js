import React from "react";

export default function TaskItem({ task, changeItem, onDelete }) {
  const classes = ["task-item"];

  if (task.completed) {
    classes.push("_done");
  }

  return (
    <li className="task-item">
      <span className={classes.join(" ")}>
        <span>{task.taskName}</span>
        <span>{task.time}</span>
        <span>{task.notes}</span>
        <input
          onChange={() => changeItem(task)}
          type="checkbox"
          checked={task.completed}
          className="task-item__checkbox"
        />
        <button onClick={() => onDelete(task.id)}>Удалить</button>
      </span>
    </li>
  );
}
