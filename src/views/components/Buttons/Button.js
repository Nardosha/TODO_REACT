import React from "react";

export default function Button({text, action, className, value}) {
  console.log(text, action, className, value);

  return (
    <button onClick={() => action(value)} className={`button-${className}`}>{text}</button>
  )
}