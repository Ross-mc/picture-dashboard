import React, { useEffect, useState } from "react";
import './App.css';
import Clock from "./components/Clock"
import Background from "./components/Background";
import API from "./utils/API"

const App = () => {

  const [currentDate, setDate] = useState(undefined);
  const [currentTime, setTime] = useState(undefined);
  const [currentImages, setImages] = useState([]);
  const [currentImage, setImage] = useState("");
  const [photoInterval, setPhotoInterval] = useState(0.25);
  const [changeImage, setChangeImage] = useState(false);

  let timeSinceInterval = 0;


  const intervalEvery1000milli = () => {
    setInterval(() => {
      if (timeSinceInterval > photoInterval * 60 * 1000) {
        setChangeImage(!changeImage)
        selectRandomImage();
        timeSinceInterval = 0;
      }
      const date = new Date();
      setDate(date.toDateString());
      setTime(date.toLocaleTimeString());
      timeSinceInterval += 1000
    }
      , 1000)
  }


  const selectRandomImage = () => {
    const randomNum = Math.floor(Math.random() * currentImages.length);
    setImage(currentImages[randomNum])
  }

  useEffect(() => {
    selectRandomImage();
  }, [changeImage])


  useEffect(() => {
    selectRandomImage();
  }, [currentImages])


  useEffect(async () => {
    const responseFromPexels = await API.getImages();
    setImages(responseFromPexels.data.photos);//hh
    intervalEvery1000milli();

  }, [])

  return (
    <div className="App">
      <Clock date={currentDate} time={currentTime} />
      {currentImage && <Background currentImg={currentImage} />}
    </div>
  );
}

export default App;
