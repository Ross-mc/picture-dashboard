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
  });

  const [currentDate, setDate] = useState(new Date().toLocaleDateString());
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const [currentImages, setImages] = useState([]);
  const [currentImage, setImage] = useState("");
  const [timeSinceInterval, setTimeSinceInterval] = useState(0);
  const [displayTaskbar, setTaskbar] = useState(false);

  const selectRandomImage = () => {
    const randomNum = Math.floor(Math.random() * currentImages.length);
    setImage(currentImages[randomNum]);
  };

  const fetchDataFromPixabay = async () => {
    const responseFromPixabay = await API.getImages(settingsState.photo.searchTerm);
    setImages(responseFromPixabay.data.hits);
  };

  const toggleTaskbar = () => {
    setTaskbar(!displayTaskbar);
  };

  useEffect(() => {
    selectRandomImage();
  }, [currentImages]);

  useEffect(() => {
    setTimeout(() => {
      setTimeSinceInterval(timeSinceInterval + 1000)
    }, 1000)
    if (timeSinceInterval % (settingsState.photo.interval * 60 * 1000) === 0) {
      selectRandomImage();
    }
    const { timeDisplay, dateDisplay } = settingsState;

    const timeOptions = {
      hour12: timeDisplay.hour12,
      hour: "2-digit",
      minute: "2-digit"
    };
    if (timeDisplay.seconds) {
      timeOptions.second = "2-digit";
    }
    const dateOptions = {
      month: "long",
      day: "numeric"
    }
    if (dateDisplay.day) {
      dateOptions.weekday = "long"
    };
    if (dateDisplay.format === "long") {
      dateOptions.year = "numeric"
    };
    // tolocaledatestring and localetimestring have two optional arguments. the first defines what locale to use (i.e. en-gb for uk or de-DE for germany) by passing
    const date = new Date();
    setDate(date.toLocaleDateString(undefined, dateOptions));
    setTime(date.toLocaleTimeString(undefined, timeOptions));
  }, [timeSinceInterval]);


  useEffect(() => {
    fetchDataFromPixabay();
  }, [settingsState.photo.searchTerm]);

  return (
    <div className="App">
      <SettingsContext.Provider value={settingsState}>
        {displayTaskbar
          ? <Taskbar toggleTaskbar={toggleTaskbar} />
          : <Button type={"primary"} text={"Customise"} onClickHandler={toggleTaskbar} />}
        <Clock date={currentDate} time={currentTime} />
        {currentImage && <Background currentImg={currentImage} />}
      </SettingsContext.Provider>
    </div>
  );
};

export default App;
