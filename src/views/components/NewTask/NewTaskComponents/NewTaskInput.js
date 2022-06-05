import React from "react";

export default class NewTaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        this.value = e.target.value
        this.props.onChange(this.value)
    }

    render() {
    const placeholder = this.props.placeholder;
    const label = this.props.label;

    return (
      <div className="new-task__name">
        <label className="label new-task__name" htmlFor="newTaskName">
          {label}
        </label>
        <input
          id="newTaskName"
          name="newTaskName"
          className="input new-task__input"
          type="text"
          placeholder={placeholder}
          onChange={this.onInputChange}
          value={this.value}
        />
      </div>
    );
  }
}
