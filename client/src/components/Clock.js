import React from "react";
import { useSettingsContext } from "../utils/context/SettingsContext";

const Clock = ({ date, time }) => {
  const [{ font, timeDisplay, dateDisplay }] = useSettingsContext()

  return (
    <div className="clock" style={{ color: font.color }}>
      {timeDisplay.show && <h1>{time.startsWith("0") ? time.replace("0", "") : time}</h1>}
      {dateDisplay.show && <p>{date}</p>}
    </div>
  )
}

export default Clock