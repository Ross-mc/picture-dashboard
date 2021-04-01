import React from "react";

const Button = ({ text, type, onClickHandler }) => {
  return (
    <button type="button" onClick={onClickHandler} className={`btn btn-${type}`}>{text}</button>
  )
}

export default Button