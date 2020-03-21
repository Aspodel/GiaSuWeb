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
            <p>Giasu@email.com</p>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <p>(+84) 123-456-789</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="header" >About Us</div>
          <div className="content">Lorem ipsum dolor sit amet, consect adipisicing elit. Illo enim maiores explicabo in eaque incidunt! Humhhem ipsum dolor, sit amet consectetur adipisicing elit. Enim, rerum.</div>
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
      </div>
    );
  }
}

export default Footer;
