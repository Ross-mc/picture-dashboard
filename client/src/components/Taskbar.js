import React from "react";


const Taskbar = () => {

  const styles = {
    position: "fixed",
    right: 0,
    top: 0,
    height: "100%",
    width: "10vw",
    backgroundColor: "#b2bec3",
  }

  return (
    <div id="taskbar" style={styles}>
      <h1>Taskbar</h1>
    </div>
  )
}

export default Taskbar