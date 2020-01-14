import React, { Component } from "react";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls})};
    this.handleClick = this.handleClick.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate() {}

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>Balls GO HERE!</div>
        <button onClick={this.handleClick}>Generate </button>
      </section>
    );
  }
}

export default Lottery;
