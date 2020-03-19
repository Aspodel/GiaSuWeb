import React, { Component } from "react";
import "./App.css";
import Home from "./Component/home";
import Benefit from "./Component/benefit";
import AboutUs from "./Component/aboutUs";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Home />
        <Benefit />
        <AboutUs/>
      </React.Fragment>
    );
  }
}

export default App;
