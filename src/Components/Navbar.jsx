


// src/Components/Navbar.jsx
import logo from '../assets/images/Logo.svg'; 
import fb   from '../assets/images/Facebook.svg';
import tw   from '../assets/images/IconX.svg';
import ig   from '../assets/images/Instagram.svg';
import yt   from '../assets/images/Youtube.svg';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="top-bar">
        <p> +46 8 123 122 44 &nbsp; contact@domain.com</p>

        <div className="social-icons">
         <img src={fb} alt="Facebook icon" className="icon" />
          <img src={tw} alt="Twitter/X icon" className="icon" />
          <img src={ig} alt="Instagram icon" className="icon" />
          <img src={yt} alt="YouTube icon" className="icon" />
        </div>
      </div>

      <nav className="navbar">
        <img src={logo} alt="StorAid logo" />

      <ul className="nav-links">
  <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
  <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
  <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
  <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
</ul>

        <button> Book Now </button>
      </nav>

      
    </header>
  );
}

