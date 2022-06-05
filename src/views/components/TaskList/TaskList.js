import React from "react";
import TaskGroup from "./components/TaskGroup";

export default class TaskList extends React.Component {

  render() {
    const groupList = this.props.groupList;
    const list = Object.keys(groupList).map((group) => {
      const groupKey = groupList[group].groupId.toString();

      return (
        <TaskGroup
          key={groupKey}
          taskGroup={groupList[group]}
        />
      );
    });

    return <ul className="task-list">{list}</ul>;
  }
}
