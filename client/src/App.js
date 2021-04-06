import React, { useEffect, useState } from "react";
import './App.css';
import SettingsContext from "./utils/context/SettingsContext"
import Clock from "./components/Clock"
import Background from "./components/Background";
import Button from "./components/Button"
import API from "./utils/API"
import Taskbar from "./components/Taskbar";

const App = () => {
  const [settingsState, setSettingsState] = useState({
    timeDisplay: {
      show: true,
      hour12: false,
      seconds: true
    },
    dateDisplay: {
      show: true,
      day: true,
      format: "long"
    },
    font: {
      color: "#FFFFFF"
    },
    photo: {
      interval: 0.25,
      searchTerm: "landscape"
    }
  })

  const [currentDate, setDate] = useState(new Date().toDateString());
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const [currentImages, setImages] = useState([]);
  const [currentImage, setImage] = useState("");
  const [timeSinceInterval, setTimeSinceInterval] = useState(0);
  const [displayTaskbar, setTaskbar] = useState(false);

  const selectRandomImage = () => {
    const randomNum = Math.floor(Math.random() * currentImages.length);
    setImage(currentImages[randomNum]);
  }

  useEffect(() => {
    selectRandomImage();
  }, [currentImages])

  useEffect(() => {
    setTimeout(() => {
      setTimeSinceInterval(timeSinceInterval + 1000)
    }, 1000)
    if (timeSinceInterval % (settingsState.photo.interval * 60 * 1000) === 0) {
      selectRandomImage()
    }
    const date = new Date();
    setDate(date.toDateString());
    setTime(date.toLocaleTimeString([], { hour12: settingsState.timeDisplay.hour12 }));
  }, [timeSinceInterval])


  useEffect(() => {
    (async function fetchData() {
      const responseFromPixabay = await API.getImages(settingsState.photo.searchTerm);
      setImages(responseFromPixabay.data.hits);
    }())

  }, [settingsState.photo.searchTerm]);

  const toggleTaskbar = () => {
    setTaskbar(!displayTaskbar)
  }

  return (
    <div className="App">
      <SettingsContext.Provider value={settingsState}>
        {displayTaskbar ? <Taskbar toggleTaskbar={toggleTaskbar} /> : <Button type={"primary"} text={"Customise"} onClickHandler={toggleTaskbar} />}
        <Clock date={currentDate} time={currentTime} />
        {currentImage && <Background currentImg={currentImage} />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
