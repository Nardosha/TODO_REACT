import React from "react";
import TaskGroup from "./components/TaskGroup";

export default function TaskList({
  groupList,
  onChange,
  onDeleteTask,
  openModal,
  onDeleteGroup,
}) {
  console.log("TASK LIST", groupList);
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
      />
    );
  });

  return <ul className="task-list task-list__group">{list}</ul>;
}
