import React from 'react';
//import PropTypes from 'prop-types';
import {Container, Button} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map((option, index ) => (
      <Button key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </Container>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {};

/*
<button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>*/
