import React, { Component } from 'react';

export default class Student extends Component {
    render() {
        return(
            <div>
                <p>Date: {this.props.date}</p>
                <p>Score: {this.props.score}</p>
            </div>
        )
    }
}