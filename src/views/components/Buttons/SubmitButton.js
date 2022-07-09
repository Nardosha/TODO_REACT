import React from "react";

export default function SubmitButton({ text, className, id, disabled}) {
  const color = { backgroundColor: disabled ? "grey" : "green" };
  return (
    <div className={className}>
      <label
        className={`button button-label ${className}`}
        htmlFor="newTaskButton"
      >
        {text}
      </label>
      <input
        disabled={disabled}
        id={id}
        className={`button ${className}`}
        type="submit"
        style={color}
      />
    </div>
  );
}
