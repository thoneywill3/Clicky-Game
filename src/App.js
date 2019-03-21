import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import apples from "./images/admiralackbar.jpg"
import blackberry from "./images/anakinskywalker.jpg"
import blueberries from "./images/battledroid.jpg"
import cherries from "./images/bb8.jpg"
import grapes from "./images/bobafett.jpg"
import orange from "./images/c3po.jpg"
import peaches from "./images/darthvader.jpg"
import pears from "./images/generalgrievous.jpg"
import plums from "./images/obiwan.jpg"
import pomegranate from "./images/quigonn.jpg"
import raspberries from "./images/r2d2.jpg"
import strawberries from "./images/stormtrooper.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "apples":
        return `${apples}`
      case "blackberries":
        return `${blackberry}`
      case "blueberries":
        return `${blueberries}`
      case "cherries":
        return `${cherries}`
      case "grapes":
        return `${grapes}`
      case "oranges":
        return `${orange}`
      case "peaches":
        return `${peaches}`
      case "pears":
        return `${pears}`
      case "plums":
        return `${plums}`
      case "pomegranates":
        return `${pomegranate}`
      case "raspberries":
        return `${raspberries}`
      case "strawberries":
        return `${strawberries}`
      default:
        return `${apples}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
