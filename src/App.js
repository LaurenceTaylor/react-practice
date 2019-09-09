import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DateOfBirth from "./components/dateOfBirth";
import Smoker from "./components/smoker";
import Bmi from "./components/bmi";
import Summary from "./components/summary";

class App extends Component {
  state = {
    pages: [
      { key: 1, display: true, dob: null, age: null },
      { key: 2, display: false, isSmoker: null },
      { key: 3, display: false, height: null, weight: null, bmi: null },
      { key: 4, display: false }
    ]
  };

  handleDOBSubmit = (key, dob, age) => {
    this.handleNextPage(key);
    const pages = [...this.state.pages];
    pages[0].dob = dob;
    pages[0].age = age;
    this.setState({ pages });
  };

  handleSmokerSubmit = (key, isSmoker) => {
    this.handleNextPage(key);
    const pages = [...this.state.pages];
    pages[1].isSmoker = isSmoker;
    this.setState({ pages });
  };

  handleBMISubmit = (key, height, weight, bmi) => {
    this.handleNextPage(key);
    const pages = [...this.state.pages];
    pages[2].height = height;
    pages[2].weight = weight;
    pages[2].bmi = bmi;
    this.setState({ pages });
  };

  handleNextPage = key => {
    const pages = [...this.state.pages];
    pages.map(page => {
      if (page.key === key) {
        page.display = false;
      }
      if (page.key === key + 1) {
        page.display = true;
      }
    });
    this.setState({ pages });
  };

  render() {
    return (
      <div>
        {this.state.pages.map(page => {
          if (page.key === 1 && page.display) {
            return (
              <DateOfBirth
                key={page.key}
                page={page}
                onDOBSubmit={this.handleDOBSubmit}
              />
            );
          } else if (page.key === 2 && page.display) {
            return (
              <Smoker
                key={page.key}
                page={page}
                onSmokerSubmit={this.handleSmokerSubmit}
              />
            );
          } else if (page.key === 3 && page.display) {
            return (
              <Bmi
                key={page.key}
                page={page}
                onBMISubmit={this.handleBMISubmit}
              />
            );
          } else if (page.key === 4 && page.display) {
            return (
              <Summary
                key={page.key}
                dob={this.state.pages[0].dob}
                age={this.state.pages[0].age}
                isSmoker={this.state.pages[1].isSmoker}
                height={this.state.pages[2].height}
                weight={this.state.pages[2].weight}
                bmi={this.state.pages[2].bmi}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default App;
