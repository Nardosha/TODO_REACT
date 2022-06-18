import React from "react";
import TaskItem from "./TaskItem";
import Button from "../../Buttons/Button";
import { ACTION_TYPE } from "../../../helpers/helpers";

export default function TaskGroup({
  taskGroup,
  changeTodoItem,
  deleteTask,
  onDeleteGroup,
  onOpenModal,
  setActionType,
}) {
  const taskItems = taskGroup.taskList.map((task) => (
    <TaskItem
      key={task.id.toString()}
      task={task}
      onOpenModal={onOpenModal}
      changeItem={changeTodoItem}
      onDelete={deleteTask}
      setActionType={setActionType}
      actionType={ACTION_TYPE.CREATE}
    />
  ));

  return (
    <li className="group-item">
      <h2 className="group-item__header">
        {taskGroup.groupSign}
        <Button
          text={"Удалить"}
          value={taskGroup}
          action={onDeleteGroup}
          className={"delete-group"}
          setActionType={() => setActionType(ACTION_TYPE.DELETE)}
        />
        <Button
          text={"+"}
          value={true}
          action={onOpenModal}
          setActionType={() => setActionType(ACTION_TYPE.OPEN)}
          className={"add-task"}
        />
      </h2>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
