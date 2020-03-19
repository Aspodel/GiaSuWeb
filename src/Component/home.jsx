import React, { Component } from "react";
import NavBar from "./navbar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <NavBar />
        <div className="logo"></div>
        <div className="gia-su">gia sư</div>
        <div className="intro">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doluptates?
          fqfhiuewui Possimus accusantium debitis laudantium ea architecto.
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
