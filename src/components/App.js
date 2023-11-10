import { GlobalStyle } from 'components/Global.style';
import { Component } from 'react';
import { Statistics } from './Statistic';

export const Button = ({ updateClics, buttonText }) => {
  return (
    <button onClick={() => updateClics(buttonText.toLowerCase())}>
      {buttonText}
    </button>
  );
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    const percentage = total === 0 ? 0 : (positive / total) * 100;
    return percentage.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Button updateClics={this.updateFeedback} buttonText="Good" />
        <Button updateClics={this.updateFeedback} buttonText="Neutral" />
        <Button updateClics={this.updateFeedback} buttonText="Bad" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>

        <GlobalStyle />
      </div>
    );
  }
}
