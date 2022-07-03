import React from "react";
import Button from "../../Buttons/Button";
import { ACTION_TYPE } from "../../../helpers/variables";

export default function TaskItem({
  todos,
  task,
  changeItem,
  onDelete,
  setActionType,
  onEditTask,
}) {
  const classes = ["task-item__content-left"];
  if (task.completed) {
    classes.push("_done");
  }
  function deleteTask() {
    setActionType(ACTION_TYPE.DELETE_TASK);
    onDelete(task.id);
  }
  function editTask() {
    setActionType(ACTION_TYPE.EDIT_TASK);
    onEditTask(task);
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
        <label className="task-item__name">{task.name}</label>
      </div>

      <div className="task-item__content-right">
        <div className="task-item__notes">
          Заметка
          <div className="task-item__notes_popup">{task.note}</div>
        </div>

        <div className="task-item__time">{task.time}</div>

        <Button
          text={"Ред-ть"}
          className={"task-item__button-rename"}
          id={"button-rename"}
          type={"button"}
          click={editTask}
        />
        <Button
          text={"Удалить"}
          className={"task-item__button-delete"}
          id={"button-delete"}
          type={"button"}
          click={deleteTask}
        />
      </div>
    </li>
  );
}
