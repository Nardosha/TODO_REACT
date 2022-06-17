import React from "react";
import TaskGroup from "./components/TaskGroup";

export default function TaskList({
  groupList,
  onChange,
  onDeleteTask,
  openModal,
}) {
  console.log(groupList)
  const list = groupList.map((group) => {
    const groupKey = group.groupId.toString();
    return (
      <TaskGroup
        key={groupKey}
        taskGroup={group}
        changeTodoItem={onChange}
        deleteTask={onDeleteTask}
        onOpenModal={openModal}
      />
    );
  });

  return <ul className="task-list task-list__group">{list}</ul>;
}
