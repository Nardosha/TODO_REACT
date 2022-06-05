import React from "react";

export default class NewTaskButton extends React.Component {
  render() {
    const text = this.props.text;
    return (
      <template className="new-task__button">
        <label className="button new-task__button_label" htmlFor="newTaskButton">{text}</label>
        <input id="newTaskButton" className="button new-task__button_add" type="submit" />
      </template>
    );
  }
}
