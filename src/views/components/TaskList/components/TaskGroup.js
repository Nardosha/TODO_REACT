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
      <span className="group-item__header">
        {taskGroup.groupSign}
        <button onClick={() => onOpenModal(true)} className="button add-task">
          +
        </button>
      </span>

      <ul className="task-group">{taskItems}</ul>
    </li>
  );
}
