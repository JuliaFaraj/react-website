import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section theme-dark">
      <div className="container">
        <h2 className="cta-title">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h2>
        <p className="cta-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
        <Link to="/contact" className="btn--primary">Book Now</Link>
      </div>
    </section>
  )
}

export default CallToAction
