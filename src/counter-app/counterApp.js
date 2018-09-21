import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class CounterApp extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    //  console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    //   data: this.state.counters.filter((_, i) => i !== index)
    // });
  };

  handleIncrement = counterItem => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterItem);
    counters[index].value++;
    this.setState({ counters });
  };

  handleResetAll = () => {
    console.log("handleResestall clicked ");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log("handleResestall clicked ", counters);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleResetAll}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default CounterApp;
