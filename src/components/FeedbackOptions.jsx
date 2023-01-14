import React from 'react';
//import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback} ) => (
    <div>
    {options.map(({ option, index }) => (
    <button
     key={index}
      onClick={() => onLeaveFeedback(index)}>
            {option}
          </button>
          ) )
    
    }
</div>
);
export default FeedbackOptions;

FeedbackOptions.propTypes={

}

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