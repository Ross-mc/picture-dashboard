import React from "react";

const Background = ({ currentImg }) => {
  return (
    <img className="bg-img" src={currentImg.largeImageURL || currentImg} alt="background image" />
  )
}

export default Background