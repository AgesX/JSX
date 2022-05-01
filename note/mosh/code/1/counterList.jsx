// 组合组件
//  imrc
import React, { Component } from "react";

import Counter from "./counter";

// cc
class XounterList extends React.Component {
  state = {
    counters: [
      {
        key: 1,
        val: 4,
      },
      {
        key: 2,
        val: 0,
      },
      {
        key: 3,
        val: 0,
      },
      {
        key: 4,
        val: 0,
      },
    ],
  };

  handleRM(counterKey) {
    console.log("调用了" + counterKey);
    const tmp = this.state.counters.filter((c_c) => c_c.key !== counterKey);
    this.setState({ counters: tmp });
  }

  handleReset = () => {
    const counters = this.state.counters.map((c_c) => {
      c_c.val = 0;
      return c_c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((countPiece) => (
          <Counter
            key={countPiece.key}
            value={countPiece.val}
            selected={true}
            onDelete={() => this.handleRM(countPiece.key)}
            counterDesp={countPiece}
          >
            <h4> Counter #{countPiece.key}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default XounterList;
