import iconPayments   from "../assets/Images/IconAffordable.svg";
import iconDataSec     from "../assets/Images/IconSafety.svg";
import iconStatistics  from "../assets/Images/IconClean.svg";
import iconSupport     from "../assets/Images/IconClock.svg";

// Jag återanvände en sektion från mitt föra projekt men eftersom det var i HTML/CSS behövde jag anpassa det till React.
// Jag hade ingen aning om hur detta skulle göras då sektionen skapades innan videos kom ut på omvanligen till react från skolan så jag fick ta hjälp av AI göra om sektionen så att den passade för React.
// Jag har en array whyItems med fyra objekt där jag definierar ikon, titel och text.
// I JSX mappar jag över den arrayen och bygger ett kort för varje item med icon + rubrik + text.
// Vänstersidan är själva listan, högersidan är ett infokort med en lite längre text.

const whyItems = [
  { id: 1, icon: iconPayments,   title: "Easy Payments",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 2, icon: iconDataSec,    title: "Data Security",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 3, icon: iconStatistics, title: "Cost Statistics", text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 4, icon: iconSupport,    title: "Support 24/7",    text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
];



const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-wrapper">

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

          <div className="why-right">
            <div className="why-card">
              <p className="why-lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida...
              </p>
              
              <div className="why-card-media" aria-hidden="true"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
