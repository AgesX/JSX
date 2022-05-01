import React, { Component } from "react";

export default class CounterC extends React.Component {
  constructor(props) {
    // called ,when an object of that type,
    // is created
    super(props);
    console.log("constructor", this);
  }

  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  stylesTwo = {
    fontSize: 20,
  };

  doIncrement(product) {
    console.log("should increment 1", this.state.value, product.id);
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.badgeStyle()}>
          {this.formatCnt()}
        </span>
        <button
          style={this.stylesTwo}
          className="btn btn-secondary btn-sm"
          onClick={() => {
            this.doIncrement({ id: 11 });
          }}
        >
          increment it
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCnt = () => {
    const { value: cnt } = this.state;
    if (cnt === 0) {
      return "Zero";
    } else {
      return cnt;
    }
  };

  badgeStyle() {
    let cntClass = "badge m-2 bg-";
    const { value: cnt } = this.state;
    if (cnt === 0) {
      cntClass += "warning";
    } else {
      cntClass += "primary";
    }
    return cntClass;
  }
}

// btn-sm
// btn small
