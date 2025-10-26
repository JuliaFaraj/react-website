import React from 'react'


const HeroSub = () => {
  return (
   // HeroSub.jsx (endast struktur)
<section className="about-hero">
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
    </div>
  </div>
</section>

  )
}

export default HeroSub
