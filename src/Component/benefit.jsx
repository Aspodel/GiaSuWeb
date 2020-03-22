import React, { Component } from "react";
import job from "../Image/job.png";
import tutor from "../Image/tutor.png";
import market from "../Image/market.png";
import meeting from "../Image/meeting.png";

class Benefit extends Component {
  render() {
    return (
      <div id="benefit">
        <div className="benefit-header">Benefit</div>
        <div className="benefit-content">
          <div className="card">
            <img src={job} className="card-image" />
            <div className="card-header">Jobs</div>
            <ul>
              <li>Partime Jobs</li>
              <li>Professional Jobs</li>
              <li>Upload Jobs</li>
            </ul>
          </div>

          <div className="card">
            <img src={tutor} className="card-image" />
            <div className="card-header">Tutor</div>
            <ul>
              <li>Become A Tutor</li>
              <li>Find Tutor</li>
              <li>Homework Help</li>
            </ul>
          </div>

          <div className="card">
            <img src={market} className="card-image" />
            <div className="card-header">Market</div>
            <ul>
              <li>Personal Sell</li>
              <li>Online Store</li>
              <li>Sale Events</li>
            </ul>
          </div>

          <div className="card">
            <img src={meeting} className="card-image" />
            <div className="card-header">Meeting</div>
            <ul>
              <li>Coffee Shop</li>
              <li>Restaurant</li>
              <li>Library</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefit;
