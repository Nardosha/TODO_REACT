import React from "react";

export default class NewTaskNotes extends React.Component {
  render() {
    const placeholder = this.props.placeholder;
    const label = this.props.label;
    return (
      <div className="new-task__notes">
        <label className="label new-task__label" htmlFor="newTaskNotes">
          {label}
        </label>
        <input
          id="newTaskNotes"
          className="input new-task__input"
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }
}
