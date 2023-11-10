import { GlobalStyle } from 'components/Global.style';
import { Component } from 'react';

const Button = ({ updateClics, buttonText }) => {
  return <button onClick={updateClics}>{buttonText}</button>;
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  updateNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  updateBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Button updateClics={this.updateGood} buttonText="Good" />
        <Button updateClics={this.updateNeutral} buttonText="Neutral" />
        <Button updateClics={this.updateBad} buttonText="Bad" />
        <h2>Statistic</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>

        <GlobalStyle />
      </div>
    );
  }
}
