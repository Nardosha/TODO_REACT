import React from "react";
import TaskItem from "./TaskItem";
import {ButtonAddTask} from "../../NewTask/NewTaskComponents/ButtonAddTask";

export default class TaskGroup extends React.Component {
  render() {
    const currentGroup = this.props.taskGroup;
    const taskItems = currentGroup.taskList.map((task) => (
      <TaskItem key={task.id.toString()} task={task} />
    ));

    return (
      <li className="group-item">
        {currentGroup.groupSign} <ButtonAddTask />
        <ul className="task-group">{taskItems}</ul>
      </li>
    );
  }
}
