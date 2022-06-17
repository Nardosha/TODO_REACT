import React from "react";

export default function TaskItem({ task, changeItem, onDelete }) {
  const classes = ["task-item__content-left"];

  if (task.completed) {
    classes.push("_done");
  }

  return (
    <li className="group-item__task task-item">
      <div className={classes.join(" ")}>
        <input
          onChange={() => changeItem(task)}
          type="checkbox"
          checked={task.completed}
          className="group-item__checkbox"
        />
        <div className="task-item__name">{task.taskName}</div>
      </div>
      <div className="task-item__content-right">
      <div className="task-item__notes">!
        <div className="task-item__notes_popup">{task.notes}</div>
      </div>


      <div className="task-item__time">{task.time}</div>
      <button
        className="task-item__button-delete"
        onClick={() => onDelete(task.id)}
      >
        Удалить
      </button>
      </div>
    </li>
  );
}
