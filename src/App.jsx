import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

import Topbar from './Components/Topbar.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-content">
        <Topbar />   {/* Dessa ligger utanför Router så att de finns med på alla sidor*/}
        <Navbar />

        <div className="Wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

