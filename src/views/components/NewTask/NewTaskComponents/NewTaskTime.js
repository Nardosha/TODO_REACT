import React from "react";

export default class NewTaskTime extends React.Component {
  render() {
    const label = this.props.label;
    const date = this.props.date;

    return (
      <div className="new-task__time">
        <label className="label new-task__label" htmlFor="newTaskDate">
          {label}
        </label>
        <input
          id="newTaskDate"
          className="input new-task__input_time"
          type="date"
        />
      </div>
    );
  }
}
