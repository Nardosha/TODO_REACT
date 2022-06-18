import React from "react";

export default function SubmitButton({text, className, id}) {

  return (

    <div className={className}>
      <label className={`button button-label ${className}`} htmlFor="newTaskButton">{text}</label>
      <input id={id} className={`button ${className}`} type='submit' />
    </div>
  )
}