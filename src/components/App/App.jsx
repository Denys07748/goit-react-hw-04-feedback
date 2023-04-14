import React, { Component } from 'react';
import css from './App.module.css';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(100 * (this.state.good/this.countTotalFeedback()));
  }

  handleIncrementFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Section title='Pleace leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : (<Notification message='There is no feedback'/>)}
        </Section>
      </div>
    );
  }
  
};

export default App;
