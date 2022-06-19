import React from "react";
import TaskGroup from "./components/TaskGroup";

export default function TaskList({
  groupList,
  onChange,
  onDeleteTask,
  onDeleteGroup,
  onAction,
  onEditTask,
}) {
  const list = groupList.map((group) => {
    const groupKey = group.groupId.toString();
    return (
      <TaskGroup
        key={groupKey}
        taskGroup={group}
        changeTodoItem={onChange}
        onDeleteTask={onDeleteTask}
        onDeleteGroup={onDeleteGroup}
        setActionType={onAction}
        onEditTask={onEditTask}
      />
    );
  });

  return <ul className="task-list task-list__group">{list}</ul>;
}
