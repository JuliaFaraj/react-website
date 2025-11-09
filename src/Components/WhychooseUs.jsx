import iconPayments   from "../assets/Images/IconAffordable.svg";
import iconDataSec     from "../assets/Images/IconSafety.svg";
import iconStatistics  from "../assets/Images/IconClean.svg";
import iconSupport     from "../assets/Images/IconClock.svg";

// // Jag återanvände en sektion från mitt föra projekt men eftersom det var i HTML/CSS behövde jag anpassa det till React.
// Jag had eingen aning om hur detta skulle göras då sektionen skapades inna  videos kom ut på det från skolan så jag fick ta hjälp av AI göra om sektionen så att den passade för React.
// Jag bad om förklaringar till varför AI tykte att jag skulle göra det på detta sättet och jag har lagt kommentarer dör att själva komma ihåg och förstå.

// Innehåll/data ligger i en separat lista. Det gör komponenten renare, lättare att testa och enklare att byta ut mot API senare.
const whyItems = [
  { id: 1, icon: iconPayments,   title: "Easy Payments",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 2, icon: iconDataSec,    title: "Data Security",   text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 3, icon: iconStatistics, title: "Cost Statistics", text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
  { id: 4, icon: iconSupport,    title: "Support 24/7",    text: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
];



const WhyChooseUs = () => {
  // <section> = semantisk “sektion” för en sammanhängande del av sidan.
  // Varför? Bättre struktur, SEO och tillgänglighet jämfört med en div.
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-wrapper">

          <div className="why-left">
            <h1 className="why-title">Why Choose Us</h1>
            <h2 className="why-subtitle">Choose Us for Exceptional Storage Solutions</h2>

            <div className="why-grid why-grid--about">

             {/*  Vi loopar igenom listan whyItems för att slippa skriva samma kod flera gånger. Det gör att all info (titel, text, ikon) bara finns på ett ställe, 
             så om vi ändrar något där uppdateras det automatiskt här. Senare kan vi enkelt byta ut listan mot data från ett API utan att ändra layouten. */}

              {whyItems.map((f) => (
                //  key = stabil identitet per rad. Hjälper React diff:a snabbare och korrekt.
                <div className="why-item" key={f.id}>
                  {/*  Ikonen är dekorativ → alt="" + aria-hidden="true" så skärmläsare inte läser upp onödig info. */}
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
