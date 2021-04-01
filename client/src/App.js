import React, { useEffect, useState } from "react";
import './App.css';
import Clock from "./components/Clock"
import Background from "./components/Background";
import Button from "./components/Button"
import API from "./utils/API"

const App = () => {

  const [currentDate, setDate] = useState(new Date().toDateString());
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const [currentImages, setImages] = useState([]);
  const [currentImage, setImage] = useState("");
  const [photoInterval, setPhotoInterval] = useState(0.25);
  const [timeSinceInterval, setTimeSinceInterval] = useState(0);

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
    if (timeSinceInterval % (photoInterval * 60 * 1000) === 0 && timeSinceInterval !== 0) {
      selectRandomImage()
    }
    const date = new Date();
    setDate(date.toDateString());
    setTime(date.toLocaleTimeString());
  }, [timeSinceInterval])


  useEffect(async () => {
    const responseFromPexels = await API.getImages();
    setImages(responseFromPexels.data.photos);
  }, [])

  return (
    <div className="App">
      <Button type={"primary"} text={"customise"} onClickHandler={() => console.log('I was clicked')} />
      <Clock date={currentDate} time={currentTime} />
      {currentImage && <Background currentImg={currentImage} />}
    </div>
  );
}

export default App;
