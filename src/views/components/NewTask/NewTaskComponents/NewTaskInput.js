import React from "react";

export default function NewTaskInput({ placeholder, label, onChange }) {
  function onInputChange(e) {
    const value = e.target.value;
    onChange(value);
  }

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
        onChange={() => onInputChange}
      />
    </div>
  );
}
