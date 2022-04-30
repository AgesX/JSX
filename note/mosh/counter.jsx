import React, { Component } from "react";

export default class CounterC extends React.Component {
  constructor(props) {
    // called ,when an object of that type,
    // is created
    super(props);
    console.log("constructor", this);
    // with bind method,

    // this.clickIncrement
    // this point method will return
    // a new instance of  clickIncrement

    // this will always refrencing current object

    // no matter how that function is called,
    // this is gonna change
    this.clickIncrement = this.clickIncrement.bind(this);
  }

  state = {
    count: this.props.value,
    addr: {
      cat: "woqu",
    },
    imgSrc: "https://picsum.photos/200",
    tagsX: ["1", "2", "3"],
    tags: [],
  };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  stylesTwo = {
    fontSize: 20,
  };

  clickIncrement() {
    console.log("should increment 1", this.state.count);
    this.setState({ count: this.state.count + 1 });
    // 调用 setState
    // react then schedule a call to the render method
    // react call render method asynchronously
  }

  doIncrement(product) {
    console.log("should increment 1", this.state.count, product.id);
    this.setState({ count: this.state.count + 1 });
  }

  renderTags = () => {
    if (this.state.tags.length === 0) {
      return <p>Tags no more</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
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
        <span style={{ fontSize: 30 }}> 我将粉碎 </span>
        {this.renderTags()}
        {this.state.tags.length === 0 && <p>free to create the first tag</p>}
      </React.Fragment>
    );
  }

  formatCnt = () => {
    const { count: cnt } = this.state;
    if (cnt === 0) {
      return "Zero";
    } else {
      return cnt;
    }
  };

  badgeStyle() {
    let cntClass = "badge m-2 bg-";
    const { count: cnt } = this.state;
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
