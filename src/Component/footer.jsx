import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer-left">
          <div>
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <p>Ho Chi Minh City, VN</p>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <p>FutureWingsStrypper@outlook.com</p>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <p>(+84) 348-164-682</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="header">About Us</div>
          <div className="content">
            We are from the ToTechs organization, our organization is all about
            Engineering Research. We are not building a brand, but rather
            Reputations and helping the social with our Engineering knowledges
            Follow us and together we will build amazing stuffs for solving our
            daily problems
          </div>
          <div className="social-media">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>

        <div className="copyright">
          &copy;2020 ToTechs. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
