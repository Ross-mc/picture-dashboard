import React, { useEffect, useState, useReducer } from "react";
import './App.css';
import { useSettingsContext } from "./utils/context/SettingsContext"
import Clock from "./components/Clock"
import Background from "./components/Background";
import Button from "./components/Button"
import API from "./utils/API"
import Taskbar from "./components/Taskbar";

const App = () => {
  // const [state, setstate] = useState({
  //   timeDisplay: {
  //     show: true,
  //     hour12: false,
  //     seconds: true
  //   },
  //   dateDisplay: {
  //     show: true,
  //     day: true,
  //     format: "long"
  //   },
  //   font: {
  //     color: "#FFFFFF"
  //   },
  //   photo: {
  //     interval: 0.25,
  //     searchTerm: "landscape"
  //   },
  //   onChange: (event) => {
  //     event.preventDefault();
  //     const stateObj = { ...state }
  //     if (event.target.name === "timeDisplay") {
  //       stateObj.timeDisplay.show = !stateObj.timeDisplay.show
  //       setstate(stateObj)
  //     }
  //   }
  // });

  const [state] = useSettingsContext();

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
    const responseFromPixabay = await API.getImages(state.photo.searchTerm);
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
    if (timeSinceInterval % (state.photo.interval * 60 * 1000) === 0) {
      selectRandomImage();
    }
    const { timeDisplay, dateDisplay } = state;

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
    // undefined we default to the local computers format
    const date = new Date();
    setDate(date.toLocaleDateString(undefined, dateOptions));
    setTime(date.toLocaleTimeString(undefined, timeOptions));
  }, [timeSinceInterval]);


  useEffect(() => {
    fetchDataFromPixabay();
  }, [state.photo.searchTerm]);

  return (
    <div className="App">
      {displayTaskbar
        ? <Taskbar toggleTaskbar={toggleTaskbar} />
        : <Button type={"primary"} text={"Customise"} onClickHandler={toggleTaskbar} />}
      <Clock date={currentDate} time={currentTime} />
      {currentImage && <Background currentImg={currentImage} />}
    </div>
  );
};

export default App;
