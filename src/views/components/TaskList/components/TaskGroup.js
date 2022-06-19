import React from "react";
import TaskItem from "./TaskItem";
import Button from "../../Buttons/Button";
import { ACTION_TYPE } from "../../../helpers/helpers";

export default function TaskGroup({
  taskGroup,
  changeTodoItem,
  onDeleteTask,
  onDeleteGroup,
  setActionType,
  onEditTask,
}) {
  function deleteTask() {
    setActionType(ACTION_TYPE.DELETE_TASK);
    onDeleteGroup(taskGroup);
  }

  function createTask() {
    setActionType(ACTION_TYPE.OPEN_MODAL);
  }

  const taskItems = taskGroup.taskList.map((task) => (
    <TaskItem
      key={task.id.toString()}
      task={task}
      changeItem={changeTodoItem}
      onDelete={onDeleteTask}
      setActionType={setActionType}
      actionType={ACTION_TYPE.CREATE_TASK}
      onEditTask={onEditTask}
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
          click={deleteTask}
        />
        <Button
          text={"+"}
          className={"add-task"}
          click={createTask}
        />
      </h2>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
