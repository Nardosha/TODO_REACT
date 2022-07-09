import React from "react";
import { Icon } from "../Icon";

export default function Button({text, className, id,  click, iconName}) {
  return (
    <button id={id} onClick={() => click()} className={`button ${className}`}>
      {text}
      {/*<Icon*/}
      {/*name={iconName}*/}
      {/*width={"24px"}*/}
      {/*height={"24px"}*/}
      {/*colot={"pink"}*/}
      {/*/>*/}
    </button>
  )
}