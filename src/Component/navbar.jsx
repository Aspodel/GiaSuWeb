import React, { Component } from "react";

class NavBar extends Component {
  state = {
    isSwitchOn: false
  };
  render() {
    console.log(this.state.isSwitchOn);
    const isOn = this.state.isSwitchOn;
    return (
      <nav className="NavBar">
        <div
          className={isOn ? "menu-icon switch-on" : "menu-icon switch-off"}
          onClick={() => this.setState({ isSwitchOn: !isOn })}
        >
          <span></span>
          <span></span>
          <span></span>
          <div
            className={
              isOn ? "menu-content switch-on" : "menu-content switch-off"
            }
          >
            <a href="#">Home</a>
            <a href="#benefit">Benefit</a>
            <a href="#about-us">About us</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
