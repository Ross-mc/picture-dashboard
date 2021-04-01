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

  useEffect(async () => {
    updateCurrentDateTime();
    const responsFromPexels = await API.getImages();
    setImages(responsFromPexels.data.photos);
    cycleImages();
  }, [])


  const updateCurrentDateTime = () => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toDateString());
      setTime(date.toLocaleTimeString())
    }
      , 1000)
  }

  const cycleImages = () => {

    setInterval(() => {
      console.log('cycle images has been called')
      selectRandomImage()
    }, 1000 * 60 * photoInterval)
  }

  const selectRandomImage = () => {
    const randomNum = Math.floor(Math.random() * currentImages.length);
    console.log('currentimages', currentImages)
    setImage(currentImages[randomNum])
  }




  return (
    <div className="App">
      <Clock date={currentDate} time={currentTime} />
      {/* <Background currentImg={currentImage} /> */}
    </div>
  );
}

export default App;
