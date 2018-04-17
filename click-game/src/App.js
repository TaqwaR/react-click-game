import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images
  };

  // function randomizeImage(id) {
  //   const images = this.state.images.filter(
  //     function (image) {
  //       if (image is clicked) {
  //
  //         //randomize images function
  //         //update state:
  //         this.setState({ images })
  //       }
  //     }
  //   )
  // }

  render() {
    return (
      <Wrapper>
        <Title>Clicky</Title>
        {this.state.images.map(myImage => (
        <ImageCard
          //randomizeImage={this.randomizeImage}
          id={myImage.id}
          key={myImage.id}
          name={myImage.name}
          image={myImage.image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
