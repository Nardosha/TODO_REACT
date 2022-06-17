import React from "react";
import TaskItem from "./TaskItem";

export default function TaskGroup({
  taskGroup,
  changeTodoItem,
  deleteTask,
  onOpenModal,
}) {
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
        <button onClick={() => onOpenModal(true)} className="button add-task">
          +
        </button>
      </h2>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
