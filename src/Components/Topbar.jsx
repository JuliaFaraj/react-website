import fb from '../assets/Images/Facebook.svg';
import tw from '../assets/Images/IconX.svg';
import ig from '../assets/Images/Instagram.svg';
import yt from '../assets/Images/Youtube.svg';

const Topbar = () => {
  return (
    <div className="top-bar">
      <p>+46 8 123 122 44 &nbsp; contact@domain.com</p>

      <div className="social-icons">
        <img src={fb} alt="Facebook" className="icon" />
        <img src={tw} alt="X/Twitter" className="icon" />
        <img src={ig} alt="Instagram" className="icon" />
        <img src={yt} alt="YouTube" className="icon" />
      </div>
    </div>
      

  );
};

export default Topbar;
