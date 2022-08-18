import React from "react";
import ism from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={ism.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref}></input>
    </div>
  );
});
export default Input;
