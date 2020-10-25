import './App.css';
import React, { Component } from 'react'
import Lottery from "./lottery"


export default class App extends Component {
  render() {
    return (
      <div>
        <Lottery/>
        <Lottery title="Happy Number" maxNum="8" numOfBalls="1" />
      </div>
    )
  }
}

