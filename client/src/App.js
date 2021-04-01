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
  const [photoInterval, setPhotoInterval] = useState(1)




  const intervalEvery1000milli = () => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toDateString());
      setTime(date.toLocaleTimeString())
    }
      , 1000)
  }


  const selectRandomImage = () => {
    const randomNum = Math.floor(Math.random() * currentImages.length);
    setImage(currentImages[randomNum])
  }

  useEffect(() => {
    console.log(currentImage)

  }, [currentImage])


  useEffect(() => {
    selectRandomImage();

  }, [currentImages])


  useEffect(async () => {
    const responseFromPexels = await API.getImages();
    setImages(responseFromPexels.data.photos);//hh
    // selectRandomImage();
    // intervalEvery1000milli();
    // hello

  }, [])
  return (
    <div className="App">
      <Clock date={currentDate} time={currentTime} />
      {currentImage && <Background currentImg={currentImage} />}
    </div>
  );
}

export default App;
