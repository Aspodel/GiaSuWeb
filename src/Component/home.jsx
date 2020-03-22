import React, { Component } from "react";
import NavBar from "./navbar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import typing from "../typing";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <NavBar />
        <div className="logo"></div>
        <div className="gia-su">gia sư</div>
        <div className="word"></div>
        <div className="intro">
          Welcome to our system. As a student, it's best for us to focus on
          studying and reduce heavy task works that time consuming. With our
          system provide a rich social network for students. COME JOIN US !!!
        </div>

        <div>
          <a href="#" className="download">
            Dowload now
          </a>
        </div>
        <a href="#benefit" className="scroll-down">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
    );
  }
}

export default Home;
