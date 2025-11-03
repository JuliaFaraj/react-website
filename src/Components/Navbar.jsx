import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/Logo.svg'; 

const Navbar = () => {
  return (
    <header>
      <div className="navbar theme-light">
        <div className="container">
          <NavLink className="logo" to="/">
            <img src={logo} alt="StorAid logo" className="logo" />
          </NavLink>

          <ul className="nav-links">            
            <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
          </ul>

          <button className="btn--primary">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


















