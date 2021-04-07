import React, { useContext } from "react";
import { useSettingsContext } from "../utils/context/SettingsContext";

const Clock = ({ date, time }) => {
  const [{ font, timeDisplay, dateDisplay }] = useSettingsContext()
  // timeDisplay: {
  //   show: true,
  //   format: 24,
  //   seconds: true
  // },
  // dateDisplay: {
  //   show: true,
  //   day: true,
  //   format: "long"
  // },
  return (
    <div className="clock" style={{ color: 'red' }}>
      {true && <h1>{time}</h1>}
      {true && <p>{date}</p>}
    </div>
  )
}

export default Clock