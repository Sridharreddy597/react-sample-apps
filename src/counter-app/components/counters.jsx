import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
    console.log("render ", this.state.counters);
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleResetAll}
        >
          Reset All
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
