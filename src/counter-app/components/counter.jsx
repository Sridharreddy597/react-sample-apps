import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No Tags !</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    //console.log(this.props.id);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>

      // <div>{this.renderTags()}</div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
