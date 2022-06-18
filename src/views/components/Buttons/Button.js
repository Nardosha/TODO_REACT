import React from "react";

export default function Button({text, action, className, value, id, setActionType, actionType}) {

  function onClick() {
    action(value)
    setActionType(actionType)
  }
  return (
    <button id={id} onClick={onClick} className={`button ${className}`}>{text}</button>
  )
}