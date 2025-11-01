// src/Components/FindUs.jsx
import React from "react";

import ContactHeroIcon from "../assets/Images/ContactHeroIcon.svg";
import CallCenter      from "../assets/Images/CallCenter.svg";
import Email           from "../assets/Images/Email.svg";
import Location        from "../assets/Images/Location.svg";

import Facebook  from "../assets/Images/Facebook.svg";
import XIcon     from "../assets/Images/iconX.svg";          // OBS: din fil heter "iconX.svg"
import Instagram from "../assets/Images/Instagram.svg";
import Youtube   from "../assets/Images/Youtube.svg";


const FindUs = () => {
  return (
    <section className="FindUs-section">
      <div className="Container">
        <div className="FindUs-grid">
          {/* Vänster: bild */}
          <div className="FindUs-media" aria-hidden="true">
            <img src={PersonImg} alt="" />
          </div>

          {/* Höger: kortet med info */}
          <div className="FindUs-card">
            <h2 className="FindUs-title">Find Us On:</h2>
            <p className="FindUs-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <ul className="FindUs-infoList">
              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={IconPhone} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Call Center</strong>
                  <span>+46 8 123 122 44</span>
                </div>
              </li>

              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={IconMail} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Email Address</strong>
                  <span>contact@domain.com</span>
                </div>
              </li>

              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={IconLocation} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Location</strong>
                  <span>Klarabergsviadukten 90, Stockholm</span>
                </div>
              </li>
            </ul>

            <div className="FindUs-socialRow">
              <span className="FindUs-socialLabel">Our Social Media</span>
              <span className="FindUs-socialDivider" aria-hidden="true"></span>
              <nav className="FindUs-socialIcons" aria-label="Social media">
                <a href="#" aria-label="Facebook">
                  <img src={IconFacebook} alt="" />
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <img src={IconX} alt="" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src={IconInstagram} alt="" />
                </a>
                <a href="#" aria-label="YouTube">
                  <img src={IconYoutube} alt="" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;

