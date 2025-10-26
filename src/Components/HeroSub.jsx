import React from 'react'
import { NavLink } from 'react-router-dom';
import PhoneIcon from '../assets/Images/PhoneIcon.svg';


const HeroSub = () => {
  return (
    <section className="about-hero theme-light">
      <div className="container">
        <div className="about-media">
          {/* <img src={imageUrlFromAPI} alt="..." /> */}

          <div className="about-stats"> {/* About-stars stycket är genererat med AI*/}
            <div className="stat"><strong>12+</strong><span>Years of Experience</span></div>
            <div className="stat"><strong>150K+</strong><span>Satisfied Clients</span></div>
            <div className="stat"><strong>35+</strong><span>Warehouse</span></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="hero-sub-title">About Us</h2>
          <h2 className="hero-sub-text">Providing a Safe Space for Your Treasured Items</h2>
          <p className="hero-sub-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

          <div className="subCards">
            <div className="visionCard">
              <h5 className="VisionCard">Vision</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
            <div className="missionCard">
              <h5 className="missionCard">Mission</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
            </div>
          </div>

          <div className="about-actions">   {/* <— LIGGER UTANFÖR subCards */}
            <NavLink to="/services" className="btn--primary">Discover More</NavLink>

            <div className="about-contact">
              <img src={PhoneIcon} alt="" aria-hidden="true" className="contact-icon" />
              </div>
              <div className="Nummber-text">
                <p>More Information</p>
                <a href="tel:+46812312244" className="contact-phone">+46 8 123 122 44</a>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}


export default HeroSub
