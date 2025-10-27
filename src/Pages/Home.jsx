import React from 'react'
import HeroMain from "../Components/HeroMain.jsx";
import HeroSub from "../Components/HeroSub.jsx";
import Brands from '../Components/Brands.jsx';
import { Link, NavLink } from "react-router-dom";   // avsluta med semikolon
import OurServices from "../Components/OurServices.jsx"; // ingen klammer
import Testimonials from '../Components/Testimonials.jsx';

const Home = () => {
  return (
   <main>
    <HeroMain />
    <HeroSub />
    <Brands />
    <OurServices />
    <Testimonials />

    </main>
  )
}

export default Home
