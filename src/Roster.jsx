import React, { Component } from 'react';
import Student from './Student';

export default class Roster extends Component {
    render() {
        const scoreData = this.props.scores.map((score ,idx) => {
            return(
                <Student
                    date={score.date}
                    score={score.score}
                    key={`score-${idx}`}
                />
            )
        })
        
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
                {scoreData}
            </div>
        )
    }
}
