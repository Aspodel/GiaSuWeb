import React, { Component } from "react";
import boy from "../Image/boy.png";
import oldman from "../Image/oldman.png";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div id="about-us">
        <div className="team-name">To Techs Team</div>
        <div className="member">
          <div className="member-card">
            <img src={oldman} className="member-img" />
            <div className="member-name">Strypper</div>
            <div className="member-position">Team Leader</div>
          </div>

          <div className="member-card">
            <img src={boy} className="member-img" />
            <div className="member-name">Aspodel</div>
            <div className="member-position">Engineering Chief</div>
          </div>

          <div className="member-card">
            <img src={oldman} className="member-img" />
            <div className="member-name">Chính</div>
            <div className="member-position">Hardware Chief</div>
          </div>

          <div className="member-card">
            <img src={boy} className="member-img" />
            <div className="member-name">Hưng</div>
            <div className="member-position">Back-end Programmer</div>
          </div>

          <div className="member-card">
            <img src={boy} className="member-img" />
            <div className="member-name">Stark</div>
            <div className="member-position">Designer Chief</div>
          </div>

          <div className="member-card">
            <img src={boy} className="member-img" />
            <div className="member-name">Evatron</div>
            <div className="member-position">Hardware Engineer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
