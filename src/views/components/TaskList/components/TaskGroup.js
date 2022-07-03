import React from "react";
import TaskItem from "./TaskItem";
import Button from "../../Buttons/Button";
import { ACTION_TYPE } from "../../../helpers/variables";
import { getRandom } from "../../../helpers/helpers";

export default function TaskGroup({
  groupName,
  changeTodoItem,
  onDeleteTask,
  onDeleteGroup,
  setActionType,
  onEditTask,
  todos,
}) {
  function deleteTask() {
    setActionType(ACTION_TYPE.DELETE_TASK);
    onDeleteGroup(groupName);
  }

  function createTask() {
    setActionType(ACTION_TYPE.CREATE_TASK);
  }

  const taskItems = todos.map((task) => {
    if (task.group !== groupName) return;

    const taskKey = getRandom();

    return (
      <TaskItem
        todos={todos}
        key={taskKey}
        task={task}
        changeItem={changeTodoItem}
        onDelete={onDeleteTask}
        setActionType={setActionType}
        actionType={ACTION_TYPE.CREATE_TASK}
        onEditTask={onEditTask}
      />
    );
  });

  return (
    <li className="group-item">
      <h2 className="group-item__header">
        {groupName}
        <Button
          text={"Удалить"}
          value={groupName}
          action={onDeleteGroup}
          className={"delete-group"}
          click={deleteTask}
        />
        <Button text={"+"} className={"add-task"} click={createTask} />
      </h2>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
