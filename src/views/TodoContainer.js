import React from "react";
import NewTaskComponent from "./components/NewTask/NewTaskComponent";
import TaskList from "./components/TaskList/TaskList";

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isEmpty = true;


    this.saveTask = this.saveTask.bind(this);
    this.addNewTaskToGroup = this.addNewTaskToGroup.bind(this);
    this.createTaskGroup = this.createTaskGroup.bind(this);
  }
  addNewTaskToGroup(newTask) {
    this.setState({
      [newTask.groupSign]: {
        groupId: this.state[newTask.groupSign].groupId,
        groupSign: this.state[newTask.groupSign].groupSign,
        taskList: [
          ...this.state[newTask.groupSign].taskList,
          ...[newTask.task],
        ],
      },
    });
  }

  createTaskGroup(newTask) {
    this.setState({
      [newTask.groupSign]: {
        groupId: newTask.groupId,
        groupSign: newTask.groupSign,
        taskList: [newTask.task],
      },
    })
    this.isEmpty = false;
  }

  saveTask(e) {
    const newTask = e;

    if (this.isEmpty || !this.state[newTask.groupSign]) {
      this.createTaskGroup(newTask);
      return;
    }
    this.addNewTaskToGroup(newTask);
    console.log(this.state)
  }
  render() {
    console.log(this.state)
    return (
        <main className="main">
          <div className="task-list__wrapper">
          <NewTaskComponent onSave={this.saveTask} />
        {/*<TaskList groupList={this.state} />*/}
          </div>
        </main>
    );
  }
}