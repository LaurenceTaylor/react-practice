import React, { Component } from "react";

class DateOfBirth extends Component {
  state = {
    response: { date: "", age: null }
  };

  handleChange = e => {
    const response = this.state.response;
    response.date = e.target.value;
    this.setState({ response });
  };

  handleSubmit = e => {
    e.preventDefault();
    const age = this.calculateAge();
    this.props.onDOBSubmit(this.props.page.key, this.state.response.date, age);
  };

  calculateAge() {
    const today = new Date();
    const dob = new Date(this.state.response.date);
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    return (
      <React.Fragment>
        <h1>DOB Question</h1>
        <form>
          <input type="date" onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </React.Fragment>
    );
  }
}

export default DateOfBirth;
