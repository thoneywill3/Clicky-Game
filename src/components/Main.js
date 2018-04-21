import React, { Component } from "react";
import Image from "./Image";
import Img from "./Img.json"

class Main extends Component {

  shuffleArray = (array) => {

    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  render() {
    return (
      <div className="container">
        {this.shuffleArray(Img).map( image => (
        <Image src={image.url} alt={image.name} key={image.url}/>
        ))}
      </div>
      )
    }
  }

export default Main;