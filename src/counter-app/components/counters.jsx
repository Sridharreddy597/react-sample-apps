import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //assigning the props by object destructuring
    const { onReset, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset={onReset}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
