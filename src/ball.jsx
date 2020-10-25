import React, { Component } from 'react'
import "./ball.css"


export default class Ball extends Component {
    render() {
        return (
            <div className="ball">
                <p>{this.props.num}</p>
            </div>
        )
    }
}
