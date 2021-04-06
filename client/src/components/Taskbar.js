import React from "react";
import Button from "./Button";


const Taskbar = ({ toggleTaskbar }) => {

  const styles = {
    position: "fixed",
    right: 0,
    top: 0,
    height: "100%",
    width: "20vw",
    backgroundColor: "#b2bec3",
    opacity: "0.4",
    zIndex: 100
  }

  return (
    <div id="taskbar" style={styles}>
      <h1>Taskbar</h1>
      <Button onClickHandler={toggleTaskbar} text={"Close"} type={"taskbar"} />
    </div>
  )
}

export default Taskbar