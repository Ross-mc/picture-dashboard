import React, { useEffect, useState } from "react"

import Clock from "./components/Clock"

import './App.css';

const App = () => {
  const tick = () => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toDateString());
      setTime(date.toLocaleTimeString())
    }
      , 1000)
  }

  const [currentDate, setDate] = useState(undefined);
  const [currentTime, setTime] = useState(undefined);

  useEffect(tick, [])



  return (
    <div className="App">
      <Clock date={currentDate} time={currentTime} />
    </div>
  );
}

export default App;
