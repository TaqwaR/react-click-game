import React from "react";
import "./ImageCard.css";

const ImageCard = function (props) {
  return <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* image randomizing function goes here ?? */}
    {/* <span onClick={
      function() {
        props.randomizeImage()
      }
      className="randomize"
    } /> */}
  </div>
}

export default ImageCard;
