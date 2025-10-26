import React from 'react'
import footerIcon from '../assets/Images/footerIcon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
         <p>&copy; 2024 StorAid. All rights reserved.</p>

<div className="footer-links">
<img src={footerIcon} alt="Terms & Conditions" />
         <p>Terms & Conditions</p>
<img src={footerIcon} alt="Terms & Conditions" />
         <p>Privacy Policy</p>

      </div>
      </div>
     
      
      


    </div>
  )
}

export default Footer


