import React from "react";
import TaskItem from "./TaskItem";
import Button from "../../Buttons/Button";

export default function TaskGroup({
  taskGroup,
  changeTodoItem,
  deleteTask,
  onDeleteGroup,
  onOpenModal,
}) {
  console.log("TASK GROUP", taskGroup);
  const taskItems = taskGroup.taskList.map((task) => (
    <TaskItem
      key={task.id.toString()}
      task={task}
      changeItem={changeTodoItem}
      onDelete={deleteTask}
    />
  ));

  return (
    <li className="group-item">
      <h2 className="group-item__header">
        {taskGroup.groupSign}
        <Button
          text={"Удалить группу"}
          value={taskGroup}
          action={onDeleteGroup}
          className={"delete-group"}
        />
        <Button
          text={"+"}
          value={true}
          action={onOpenModal}
          className={"add-task"}
        />
      </h2>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
