import React from "react";
import "./ImageCard.css";

const ImageCard = function (props) {
  <div className="card">
    <div className="img-container">
      <img alt={prop.name} src={props.image} />
    </div>
    {/* image randomizing function goes here ??*/}
    <span onClick={
      function() {
        props.randomizeImage()
      }
      className="randomize"
    } />
  </div>
}

export default ImageCard;
