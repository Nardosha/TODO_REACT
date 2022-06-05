import React from "react";
import TaskItem from "./TaskItem";

export default class TaskGroup extends React.Component {
  render() {
    const currentGroup = this.props.taskGroup;
    const taskItems = currentGroup.taskList.map((task) => (
      <TaskItem key={task.id.toString()} task={task} />
    ));

    return (
      <li className="group-item">
        {currentGroup.groupSign}
        <ul className="task-group">{taskItems}</ul>
      </li>
    );
  }
}
