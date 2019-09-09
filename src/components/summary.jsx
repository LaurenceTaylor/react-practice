import React, { Component } from "react";

class Summary extends Component {
  constructor() {
    super();
    this.coefficients = {
      "high-bmi": {
        "high-age": {
          smoker: 0.8,
          "non-smoker": 1.6
        },
        "mid-age": {
          smoker: 1.4,
          "non-smoker": 2.2
        },
        "low-age": {
          smoker: 2.0,
          "non-smoker": 2.8
        }
      },
      "mid-bmi": {
        "high-age": {
          smoker: 2.6,
          "non-smoker": 3.6
        },
        "mid-age": {
          smoker: 3.2,
          "non-smoker": 4.2
        },
        "low-age": {
          smoker: 3.8,
          "non-smoker": 4.8
        }
      },
      "low-bmi": {
        "high-age": {
          smoker: 1.2,
          "non-smoker": 2.0
        },
        "mid-age": {
          smoker: 1.8,
          "non-smoker": 2.6
        },
        "low-age": {
          smoker: 2.4,
          "non-smoker": 3.2
        }
      }
    };
  }

  calculateQuote() {
    const bmi = this.categoriseBMI();
    const age = this.categoriseAge();
    const isSmoker = this.categoriseSmoker();
    return parseInt(this.coefficients[bmi][age][isSmoker] * 100000);
  }

  categoriseBMI() {
    const bmi = this.props.bmi;
    if (bmi > 26) {
      return "high-bmi";
    }
    if (bmi > 22) {
      return "mid-bmi";
    }
    return "low-bmi";
  }

  categoriseAge() {
    const age = this.props.age;
    if (age > 48) {
      return "high-age";
    }
    if (age > 28) {
      return "mid-age";
    }
    return "low-age";
  }

  categoriseSmoker() {
    const isSmoker = this.props.isSmoker;
    if (isSmoker) {
      return "smoker";
    }
    return "non-smoker";
  }

  render() {
    return (
      <React.Fragment>
        <h1>Summary</h1>
        <h2>Date of Birth</h2>
        <p>{this.props.dob}</p>
        <h2>Smoker?</h2>
        <p>{this.props.isSmoker.toString()}</p>
        <h2>Height (cm)</h2>
        <p>{this.props.height}</p>
        <h2>Weight (kg)</h2>
        <p>{this.props.weight}</p>
        <h2>Insurance quote:</h2>
        <p>£{this.calculateQuote()}</p>
      </React.Fragment>
    );
  }
}

export default Summary;
