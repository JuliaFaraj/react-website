/*
 * ------------------------------------------------------------
 *  FIL: Testimonials.jsx
 * ------------------------------------------------------------
 *  Denna komponent är delvis genererad och förklarad med hjälp av AI (ChatGPT).
 *
 *  Jag utgick från en tidigare uppgift där jag hade en grundstruktur för
 *  testimonials-sektionen (rubrik, tre kort med kundomdömen och bilder).
 *
 *  AI:n hjälpte mig att:
 *   - Göra komponenten mer dynamisk och förbereda den för att hämta data från ett API.
 *   - Strukturera koden så att testimonials kan mappas ut från en lista med objekt.
 *   - Lägga till en mindre "Stars"-komponent för betyg.
 *   - Förklara hur jag senare kan ersätta de hårdkodade värdena med data från API.
 *
 *  All kod har granskats och anpassats av mig efteråt.
 */


// EXEMPELDATA (tas bort sen när jag matar in från API)
const defaultItems = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Aiden Harvey",
    role: "Customer",
    rating: 4,
    avatarUrl: "https://via.placeholder.co/64x64", // byt till API-url
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Carrisa Jocelyn",
    role: "Customer",
    rating: 5,
    avatarUrl: "https://via.placeholder.co/64x64",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Celvin Gabriel",
    role: "Customer",
    rating: 5,
    avatarUrl: "https://via.placeholder.co/64x64",
  },
];

// Liten hjälpfunktion för stjärnor
const Stars = ({ value = 0 }) => {
  return (
    <div className="stars" aria-label={`${value} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`star ${i < value ? "full" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = ({ items = defaultItems }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-row">
          <h1 className="section-title">Testimonials</h1>
          <p className="section-subtitle">See What Our Client Have to Say</p>
          <p className="section-ingress">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie
            nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi
            non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>

        <div className="testimonials-grid">
          {items.map((t) => (
            <article className="t-card" key={t.id}>
              <div className="quote-badge">“</div>
              <Stars value={t.rating} />
              <p>{t.text}</p>
              <div className="t-user">
                <img src={t.avatarUrl} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
