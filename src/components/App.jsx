import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
if (e === 'Good') {
  this.setState(prevState => ({
    good: prevState.good + 1,
  }));
} else if (e === 'Neutral') {
  this.setState(prevState => ({
    neutral: prevState.neutral + 1,
  }));
} else if (e === 'Bad') {
  this.setState(prevState => ({
    bad: prevState.bad + 1,
  }));
}
  }
  /*handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };*/

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    let positive = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positive;
  };

  render() {
    //const good = this.state.good;
    //const neutral = this.state.neutral;
    //const bad = this.state.bad;
    //const total = this.countTotalFeedback();
    //const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.handleFeedback}
          />{' '}

          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </div>
    );
  }
}
