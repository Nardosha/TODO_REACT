import React from "react";
import TaskGroup from "./components/TaskGroup";
import { getRandom } from "../../helpers/helpers";

export default function TaskList({
  todos,
  onChange,
  onDeleteTask,
  onDeleteGroup,
  onAction,
  onEditTask,
}) {
  const groupSet = new Set();

  todos.map((group) => groupSet.add(group.group));
  const groups = [...groupSet];

  const groupList = groups.map((group) => {
    const groupKey = getRandom();

    return (
      <TaskGroup
        todos={todos}
        key={groupKey}
        groupName={group}
        changeTodoItem={onChange}
        onDeleteTask={onDeleteTask}
        onDeleteGroup={onDeleteGroup}
        setActionType={onAction}
        onEditTask={onEditTask}
      />
    );
  });

  return <ul className="task-list task-list__group">{groupList}</ul>;
}
