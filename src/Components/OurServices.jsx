
const OurServices = () => {
  return (
    <section className="our-services">
        <div className="container"> 
      <h2 className="hero-sub-title">Our Services</h2>

      <div className="our-services-header">
        <h2 className="hero-sub-text">Specialized Storage for Every Special Item</h2>
        <p className="hero-sub-ingress">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui
          lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisl non sodales augue.
          Phasellus eget elit gravida.
        </p>
      </div>

      <div className="services-layout">
        <div className="services-col">
          <div className="service-card">
            <h5>Diverse Unit Sizes</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </div>
          <div className="service-card">
            <h5>Moving Assistance</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit…</p>
          </div>
        </div>

        <div className="services-media" aria-hidden="true">
           </div>

        <div className="services-col">
          <div className="service-card">
            <h5>Vehicle Storage</h5>
            <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo…</p>
          </div>
          <div className="service-card">
            <h5>Top-Notch Security</h5>
            <p>Perspiciatis unde omnis iste natus error sit voluptatem…</p>
          </div>
        </div>
      </div>
       </div>
    </section>
  );
};

export default OurServices;

