import React from "react";
import TaskGroup from "./components/TaskGroup";

export default function TaskList({
  groupList,
  onChange,
  onDeleteTask,
  openModal,
  onDeleteGroup,
  actionType
}) {
  const list = groupList.map((group) => {
    const groupKey = group.groupId.toString();
    return (
      <TaskGroup
        key={groupKey}
        taskGroup={group}
        changeTodoItem={onChange}
        deleteTask={onDeleteTask}
        onOpenModal={openModal}
        onDeleteGroup={onDeleteGroup}
        setActionType={actionType}
      />
    );
  });

  return <ul className="task-list task-list__group">{list}</ul>;
}
