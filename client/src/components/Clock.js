import React from "react";

const Clock = ({ date, time }) => {
  return (
    <div className="clock">
      <h1>{time}</h1>
      <p>{date}</p>
    </div>
  )
}

export default Clock