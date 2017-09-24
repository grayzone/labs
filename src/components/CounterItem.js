import React from "react";
import propTypes from "prop-types";

export default class CounterItem extends React.Component {
  static propTypes = {
    value: propTypes.number.isRequired,
    actions: propTypes.object.isRequired
  };

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.handleIncrement();
    }
  };
  incrementAsync = () => {
    setTimeout(this.handleIncrement, 1000);
  };

  handleIncrement = () => {
    this.props.actions.increment();
  };

  handleDecrement = () => {
    this.props.actions.decrement();
  };

  render() {
 //   console.log("props:", this.props);
    return (
      <p>
        Clicked:{this.props.value} times{" "}
        <button onClick={this.handleIncrement}>+</button>{" "}
        <button onClick={this.handleDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>increment async</button>
      </p>
    );
  }
}
