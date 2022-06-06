import React from "react";

export default class NewTaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.taskName = "";
    this.time = "";
    this.notes = "";
    this.id = 13;
    this.groupSign = "TODO";
    this.groupId = 25;

    this.submitHandler = this.submitHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const property = e.target.name;
    const value = e.target.value;
    this[property] = value ? value.toString() : "";
  }

  submitHandler(props) {
    props.preventDefault();
    const item = {
      groupSign: this.groupSign,
      groupId: this.groupId,
      task: {
        id: this.id,
        taskName: this.taskName,
        time: this.time,
        notes: this.notes,
      },
    };
    this.props.onSave(item);
  }

  render() {
    return (
      <div className="popup new-task">
        <div className="popup__container">
          <div className="new-task__wrapper">
            <h2 className="title new-task__title">New Task</h2>
            <form
              className="new-task__form"
              action="#"
              onSubmit={this.submitHandler}
            >
              <label className="label new-task__name" htmlFor="newTaskName">
                Name
              </label>
              <input
                name="taskName"
                id="newTaskName"
                type="text"
                placeholder="Enter something..."
                className="input new-task__input"
                onChange={this.onChange}
              />
              <label className="label new-task__label" htmlFor="newTaskDate">
                Time
              </label>
              <input
                id="newTaskDate"
                className="input new-task__input_time"
                name="time"
                type="time"
                onChange={this.onChange}
              />
              <label className="label new-task__name" htmlFor="newTaskName">
                Notes
              </label>
              <input
                id="newTaskName"
                name="notes"
                className="input new-task__input"
                type="text"
                placeholder="Notes..."
                onChange={this.onChange}
              />
              <div className="new-task__button">
                <label
                  className="button new-task__button_label"
                  htmlFor="newTaskButton"
                >
                  +
                </label>
                <input
                  id="newTaskButton"
                  className="button new-task__button_add"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
