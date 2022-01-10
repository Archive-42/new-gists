import React, { Component } from "react";
import { render, Color } from "ink";
 
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
    };
  }
  render() {
    return (
      <>
        <Color redBright>You have {this.state.i} milliseconds passed</Color>
        <Color greenBright>You have {this.state.i} milliseconds passed</Color>
        <Color blueBright>You have {this.state.i} milliseconds passed</Color>
      </>
    );
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1,
      });
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
render(<Counter />);