import React, { useState } from "react";
import Button from "../../Buttons/Button";
import { ACTION_TYPE } from "../../../helpers/helpers";

export default function TaskItem({ task, changeItem, onDelete, onOpenModal, setActionType }) {
  const classes = ["task-item__content-left"];
  // const [input, setInput] = useState('');
  let value = ''

  if (task.completed) {
    classes.push("_done");
  }

  function setNewName(e) {
    value = e.target.value
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
        <label className="task-item__name">{task.taskName}</label>
        <input onInput={e => setNewName} className='input' type="text"/>

      </div>

      <div className="task-item__content-right">
        <div className="task-item__notes">
          Заметка
          <div className="task-item__notes_popup">{task.notes}</div>
        </div>

        <div className="task-item__time">{task.time}</div>

        <Button
          text={"Ред-ть"}
          action={onOpenModal}
          value={true}
          className={"task-item__button-rename"}
          id={'button-rename'}
          type={'button'}
          setActionType={setActionType}
          actionType={ACTION_TYPE.OPEN}
        />
        <Button
          text={"Удалить"}
          action={onDelete}
          value={task.id}
          className={"task-item__button-delete"}
          id={'button-delete'}
          type={'button'}
          setActionType={setActionType}
          actionType={ACTION_TYPE.DELETE}
        />
      </div>
    </li>
  );
}
