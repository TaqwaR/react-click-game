import React, { Component } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images
  };

  function randomizeImage(id) {
    const images = this.state.images.filter(
      function (image) {
        if (image is clicked) {

          //randomize images function
          //update state:
          this.setState({ images })
        }
      }
    )
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky</Title>
        {this.state.friends.map(image => (
        <ImageCard
          randomizeImage={this.randomizeImage}
          id={image.id}
          key={image.id}
          name={image.id}
          image={image.image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
