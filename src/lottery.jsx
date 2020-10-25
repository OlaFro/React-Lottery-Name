import React, { Component } from 'react'
import Ball from "./ball"
import "./lottery.css"



export default class App extends Component {
  static defaultProps = {
    title: "Lotto",
    numOfBalls: 6,
    maxNum: 40,
  }

  constructor(props){
      super(props);
      this.state = {
        nums: Array.from({ length: this.props.numOfBalls }),
      };
      this.handleClick = this.handleClick.bind(this)
  }
  
  generate() {
    this.setState(currState => ({
        nums: currState.nums.map(
            n => Math.floor(Math.random() *this.props.maxNum)+1
        )
    }));
    
  }

  handleClick(){
      this.generate();
  }

  render() {
    return (
      <section className="lottery">
        <h1>{this.props.title}</h1>
        <div className="balls">
            {this.state.nums.map(n=> (<Ball num={n}/>))}
        </div>
        <button onClick={this.handleClick}>Generate!</button>
      
      </section>
    )
  }
}