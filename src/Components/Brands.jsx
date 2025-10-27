// src/Components/Brands.jsx
import logo1 from "../assets/Images/Logoipsum 1.svg";
import logo2 from "../assets/Images/Logoipsum 2.svg";
import logo3 from "../assets/Images/Logoipsum 3.svg";
import logo4 from "../assets/Images/Logoipsum 4.svg";
import logo5 from "../assets/Images/Logoipsum 5.svg";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__inner">
        <img className="brands__img" src={logo1} alt="Logoipsum 1" />
        <img className="brands__img" src={logo2} alt="Logoipsum 2" />
        <img className="brands__img" src={logo3} alt="Logoipsum 3" />
        <img className="brands__img" src={logo4} alt="Logoipsum 4" />
        <img className="brands__img" src={logo5} alt="Logoipsum 5" />
      </div>
    </section>
  );
};

export default Brands;
