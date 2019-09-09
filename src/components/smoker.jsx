import React, { Component } from "react";

class Smoker extends Component {
  state = {
    response: { isSmoker: null }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSmokerSubmit(
      this.props.page.key,
      this.state.response.isSmoker
    );
  };

  handleChange = isSmoker => {
    const response = this.state.response;
    response.isSmoker = isSmoker;
    this.setState({ response });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Smoker Question</h1>
        <form>
          <h1>Yes</h1>
          <input
            type="radio"
            name="isSmoker"
            onChange={() => this.handleChange(true)}
          />
          <h1>No</h1>
          <input
            type="radio"
            name="isSmoker"
            onChange={() => this.handleChange(false)}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </React.Fragment>
    );
  }
}

export default Smoker;
