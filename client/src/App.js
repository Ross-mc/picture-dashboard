import React, { useEffect, useState } from "react";
import './App.css';
import Clock from "./components/Clock"
import Background from "./components/Background";
import Button from "./components/Button"
import API from "./utils/API"
import Taskbar from "./components/Taskbar";

const App = () => {

  const [currentDate, setDate] = useState(new Date().toDateString());
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const [currentImages, setImages] = useState([]);
  const [currentImage, setImage] = useState("");
  const [photoInterval, setPhotoInterval] = useState(0.25);
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
    if (timeSinceInterval % (photoInterval * 60 * 1000) === 0) {
      selectRandomImage()
    }
    const date = new Date();
    setDate(date.toDateString());
    setTime(date.toLocaleTimeString());
  }, [timeSinceInterval])


  useEffect(async () => {
    const responseFromPixabay = await API.getImages();
    console.log(responseFromPixabay)
    setImages(responseFromPixabay.data.hits);
  }, []);

  const toggleTaskbar = () => {
    setTaskbar(!displayTaskbar)
  }

  return (
    <div className="App">
      {displayTaskbar ? <Taskbar toggleTaskbar={toggleTaskbar} /> : <Button type={"primary"} text={"Customise"} onClickHandler={toggleTaskbar} />}
      <Clock date={currentDate} time={currentTime} />
      {currentImage && <Background currentImg={currentImage} />}
    </div>
  );
}

export default App;
