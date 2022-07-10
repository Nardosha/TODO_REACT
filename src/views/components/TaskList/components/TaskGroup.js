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
  onCreateTask,
  todos,
}) {
  function deleteTask() {
    setActionType(ACTION_TYPE.DELETE_TASK);
    onDeleteGroup(groupName);
  }

  const taskItems = todos.map((task) => {
    if (task.group === groupName) {
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
    }
  });

  return (
    <li className="group-item">
      <div className="group-item__header">
        <div className='group-item__title'>
          <h2 className="group-item__title_text">{groupName}</h2>
        </div>

        <div className="group-item__buttons">
          <Button
            text="+"
            className="add-task"
            click={() => onCreateTask()}
          />
          <Button
            text="-"
            value={groupName}
            action={onDeleteGroup}
            className="delete-group"
            click={deleteTask}
          />
        </div>
      </div>

      <ul className="task-list group-item__list">{taskItems}</ul>
    </li>
  );
}
