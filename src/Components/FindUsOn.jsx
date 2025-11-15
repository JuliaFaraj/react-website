
import ContactHeroIcon from "../assets/Images/ContactHeroIcon.svg";
import PhoneIcon       from "../assets/Images/PhoneIcon.svg";   
import EmailIcon       from "../assets/Images/Email.svg";
import LocationIcon    from "../assets/Images/Location.svg";

import Facebook  from "../assets/Images/Facebook.svg";
import XIcon         from "../assets/Images/iconX.svg";
import Instagram from "../assets/Images/Instagram.svg";
import Youtube   from "../assets/Images/Youtube.svg";




const FindUs = () => {
  return (
    <section className="FindUs-section">
      <div className="Container">
        <div className="FindUs-grid">

          <div className="FindUs-media" aria-hidden="true">
            <img src={ContactHeroIcon} alt="" />         
             </div>

          <div className="FindUs-card">
            <h2 className="FindUs-title">Find Us On:</h2>
            <p className="FindUs-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <ul className="FindUs-infoList">
              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={PhoneIcon} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Call Center</strong>
                  <span>+46 8 123 122 44</span>
                </div>
              </li>

              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={EmailIcon} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Email Address</strong>
                  <span>contact@domain.com</span>
                </div>
              </li>

              <li className="FindUs-infoItem">
                <img className="FindUs-infoIcon" src={LocationIcon} alt="" aria-hidden="true" />
                <div className="FindUs-infoText">
                  <strong>Location</strong> 
                  <span>Klarabergsviadukten 90, Stockholm</span>
                </div>
              </li>
            </ul>

            <div className="FindUs-socialRow">
              <span className="FindUs-socialLabel">Our Social Media</span>
              <span className="FindUs-socialDivider" aria-hidden="true"></span> { /* dekorativ linje framtagen med hjälp av AI */ }
              <nav className="FindUs-socialIcons" aria-label="Social media">
                <a href="#" aria-label="Facebook">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <img src={XIcon} alt="" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src={Instagram} alt="" />
                </a>
                <a href="#" aria-label="YouTube">
                  <img src={Youtube} alt="" />
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

