import React from "react";

const Background = ({ currentImg }) => {
  return (
    <img className="bg-img" src={currentImg.src.original} alt="background image" />
  )
}

export default Background