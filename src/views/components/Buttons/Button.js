import React from "react";

export default function Button({text, className, id,  click}) {
  return (
    <button id={id} onClick={() => click()} className={`button ${className}`}>{text}</button>
  )
}