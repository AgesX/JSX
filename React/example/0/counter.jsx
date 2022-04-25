import React, { Component } from "react";

export default class CounterC extends React.Component {
  state = {
    count: 0,
    addr: {
      cat: "woqu",
    },
    imgSrc: "https://picsum.photos/200",
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imgSrc} alt="" />
        <span>{this.formatCnt()}</span>
        <span className="badge badge-primary">我是衡量一切的</span>
        <button> increment it</button>
      </React.Fragment>
    );
  }

  formatCnt = () => {
    const { count: cnt } = this.state;
    if (cnt === 0) {
      return <h1>Zero</h1>;
    } else {
      return cnt;
    }
  };
}
