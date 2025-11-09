import StarRating from "./StarRating";


const Testimonial = ({item}) => {
  
  return (
    <div className="testimonial">
    <div className="quote-icon">
      <i className="fa-sharp fa-solid fa-quote-left"></i>
    </div>

    <StarRating starRating={item.rating} />

    <p>{item.comment}</p>

    <div className="testimonial-author">
      <img
        className="profile"
        src={item.avatarUrl}
        alt={item.name}
      />
      <div className="author">
        <h6 className="name">{item.name}</h6>
        <p className="role">{item.role}</p>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;







        
              

















































/*
 *
 *  Denna komponent är delvis genererad och förklarad med hjälp av AI (ChatGPT).
 *  Jag utgick från en tidigare uppgift där jag hade en grundstruktur för
 *  testimonials-sektionen (rubrik, tre kort med kundomdömen och bilder). AI förklarade för mig att strukturen blir annurlunda i React samt att 
 *  jag behöver göra den mer dynamisk för att kunna hämta data från ett API.
 *
 *  AI hjälpte mig att:
 *   - Göra komponenten mer dynamisk och förbereda den för att hämta data från ett API.
 *   - Strukturera koden så att testimonials kan mappas ut från en lista med objekt.
 *   - Lägga till en mindre "Stars"-komponent för betyg.
 *   - Förklara hur jag senare kan ersätta de hårdkodade värdena med data från API.
 *
 *  
 */


// TODO(bg): koppla bakgrundsbild via import + overlay (#12372A @ 80%).



/*
  const defaultItems = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Aiden Harvey",
    role: "Customer",
    rating: 4,
    avatarUrl: "https://via.placeholder.com/64x64", // byt till API-url
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Carrisa Jocelyn",
    role: "Customer",
    rating: 5,
    avatarUrl: "https://via.placeholder.com/64x64",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
    name: "Celvin Gabriel",
    role: "Customer",
    rating: 5,
    avatarUrl: "https://via.placeholder.com/64x64",
  },
];

// Liten hjälpfunktion för stjärnor
const Stars = ({ value = 0 }) => { // value är betyget 0-5
  return ( // Render star rating
    <div className="stars" aria-label={`${value} of 5`}> 
      {Array.from({ length: 5 }, (_, i) => ( // Loop to create 5 stars
        <span
          key={i}
          className={`star ${i < value ? "full" : ""}`}
          aria-hidden="true"
        >
          ★
        </span> // Star character
      ))}
    </div>
  );
};

const Testimonials = ({ items = defaultItems }) => { // Testimonials component with default items
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
          {items.map((t) => ( // Map over testimonials
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
*/