// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './Components/Topbar.jsx';
import Navbar from './Components/Navbar.jsx';
import './index.css';
import Contact from './Pages/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />          {/* <-- Lägg till den här */}
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
