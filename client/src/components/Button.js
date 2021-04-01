import React from "react";

const Button = ({ text, type, onClickHandler }) => {
  return (
    <button type="button" onClick={onClickHandler} className={`btn btn-${type}`} id={text}>{text}</button>
  )
}

export default Button