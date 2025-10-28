// src/Components/WhyChooseUs.jsx
import iconPayments    from "../assets/Images/IconAffordable.svg";
import iconDataSec     from "../assets/Images/IconSafety.svg";
import iconStatistics  from "../assets/Images/IconClean.svg";
import iconSupport     from "../assets/Images/IconClock.svg";

// Döp data-arrayen så den inte krockar med komponentnamn
const whyItems = [
  { id: 1, icon: iconPayments,   title: "Easy Payments",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  { id: 2, icon: iconDataSec,    title: "Data Security",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  { id: 3, icon: iconStatistics, title: "Cost Statistics", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  { id: 4, icon: iconSupport,    title: "Support 24/7",    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-wrapper">
          {/* Vänster kolumn: 4 features i vertikal lista */}
          <div className="why-left">
            <h1 className="why-title">Why Choose Us</h1>
            <h2 className="why-subtitle">Choose Us for Exceptional Storage Solutions</h2>
            

            <div className="why-grid why-grid--about">
              {whyItems.map((f) => (
                <div className="why-item" key={f.id}>
                  <img src={f.icon} alt="" className="why-icon" aria-hidden="true" />
                  <div className="why-text">
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Höger kolumn: API-kort (placeholder) */}
          <div className="why-right">
            <div className="api-card">
              <p className="why-lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
              </p>
              <p>API här senare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

