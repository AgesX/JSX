import React, { Component } from "react";

class Button extends Component {
  state = {
    color: "red",
    background: "white"
  };


  // 点击按钮，变颜色
  onClick = () => {
    // this 这个组件的一个实例


    // 如果 setState 是覆盖的操作，
    // background 属性，就会被 gg
    this.setState({
      color: "black"
    });
    console.log(this.state.color);
  };

  render() {
    const {title} = this.props;
    const { color, background } = this.state;
    //  onClick, C 大写， react 的写法
    return (
      <button style={{ color, background }} onClick={this.onClick}>
        {" "}
        点击{" "}

        {title}
      </button>
    );
  }
}

export default Button;






