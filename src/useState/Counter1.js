import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange1 = (e) => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleChange2 = (e) => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange1}
        />
        <input
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange2}
        />
        <p>{this.state.firstName} </p>
      </>
    );
  }
}

export default Counter1;
