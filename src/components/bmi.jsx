import React, { Component } from "react";

class Bmi extends Component {
  state = {
    response: { height: null, weight: null, bmi: null }
  };

  handleHeightChange = e => {
    const response = this.state.response;
    response.height = e.target.value;
    this.setState({ response });
  };

  handleWeightChange = e => {
    const response = this.state.response;
    response.weight = e.target.value;
    this.setState({ response });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.calculateBMI();
    if (this.state.response.height === null) {
      alert("Please enter a height");
    } else if (this.state.response.weight === null) {
      alert("Please enter a weight");
    } else if (this.state.response.bmi < 18 || this.state.response.bmi > 32) {
      alert("Your details are not suitable for this service");
    } else {
      this.props.onBMISubmit(
        this.props.page.key,
        this.state.response.height,
        this.state.response.weight,
        this.state.response.bmi
      );
    }
  };

  calculateBMI() {
    const bmi = this.round(
      this.state.response.weight / (this.state.response.height / 100) ** 2
    );
    const response = this.state.response;
    response.bmi = bmi;
    this.setState({ response });
  }

  round(int) {
    return Math.round(int * 10) / 10;
  }

  render() {
    return (
      <React.Fragment>
        <h3>What is your height and weight</h3>
        <form>
          <h1>Height (cm)</h1>
          <input type="number" onChange={this.handleHeightChange} />
          <h1>Weight (kg)</h1>
          <input type="number" onChange={this.handleWeightChange} />
          <br />
          <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </React.Fragment>
    );
  }
}

export default Bmi;
