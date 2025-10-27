import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './Components/Topbar.jsx';
import Navbar from './Components/Navbar.jsx';
import './index.css';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Footer from './Components/Footer.jsx';
import HeroMain from './Components/HeroMain.jsx';
import HeroSub from './Components/HeroSub.jsx';
import Brands from './Components/Brands.jsx';
import OurServices from './Components/OurServices.jsx';
import Testimonials from './Components/Testimonials.jsx';

const App = () => {
  return (
    <BrowserRouter>
          <div className="App-content">

      <Topbar />
      <Navbar />
     
      <div className="Wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
