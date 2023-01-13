import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
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
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback !== 0) {
    let positive = (this.state.good / this.countTotalFeedback) * 100
    return positive;
    }
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const total = this.countTotalFeedback();
    const positive = Math.round((good / total) * 100);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>

        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positive} %</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
