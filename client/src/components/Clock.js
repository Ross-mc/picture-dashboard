import React, { useContext } from "react";
import SettingsContext from "../utils/context/SettingsContext";

const Clock = ({ date, time }) => {
  const { font } = useContext(SettingsContext)
  return (
    <div className="clock" style={{ color: font.color }}>
      <h1>{time}</h1>
      <p>{date}</p>
    </div>
  )
}

export default Clock