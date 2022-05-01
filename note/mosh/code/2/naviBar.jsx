import React, { Component } from "react";

class NaviBar extends React.Component {
  render() {
    console.log("我去 " + this.props.totalNum);
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge rounded-pill bg-secondary">
              {this.props.totalNum}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NaviBar;
