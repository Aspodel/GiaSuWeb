import React, { Component } from "react";
import "./App.css";
import Home from "./Component/home";
import Benefit from "./Component/benefit";
import AboutUs from "./Component/aboutUs";
import Footer from "./Component/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Home />
        <Benefit />
        <AboutUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
