import React from "react";

export default class TaskItem extends React.Component {
  render() {
    const task = this.props.task;
    const name = task.taskName;
    const time = task.time;
    const notes = task.notes;

    return (
      <li className="task-item">
        <span>{name}</span>
        <span>{time}</span>
        <span>{notes}</span>
      </li>
    );
  }
}
