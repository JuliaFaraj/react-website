import React from 'react'
import heroImg from '../assets/Images/hero-image.svg';
import { NavLink } from 'react-router-dom';


const HeroMain = () => {
  return (
   <section className="hero theme-dark">
      <div className="container">
        <div className="heroMain-content">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to StorAid</h1>
            <h2 className="hero-subtitle">Space Simplified, Storage Perfected</h2>
            <p className="hero-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor..</p>
            
            <div className="hero-buttons">
                <NavLink className="btn--primary">Discover More</NavLink>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMain
