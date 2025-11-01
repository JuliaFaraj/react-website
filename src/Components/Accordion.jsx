// Accordion delen försöktes skapas med hjälp av tidigare projekt samt med saker som is open och toggle funktioner. Efter många ommoment tog jag hjälp från AI för att anpass efter js och React. AI hjälpte mig att skapa en fungerande Accordion komponent som jag sedan kunde stänga och öppna frågor i.
// useState är en s.k. “hook” i React. Den används för att spara och ändra data som påverkar vad som syns i gränssnittet.
// När state ändras, kör React om komponenten automatiskt och uppdaterar innehållet på skärmen.
import { useState } from "react";


// Detta är själva komponenten. En komponent i React är som en “funktion” som returnerar HTML (JSX) att visa på sidan.
const Accordion = () => {

  // Här skapar vi en lista med frågor och svar.
  // Vi använder en array med objekt eftersom varje fråga (q) har ett eget svar (a).
  // Du kan lägga till fler frågor genom att lägga till fler objekt med samma struktur.
  const items = [
    {
      q: "Can I access my stored items anytime?",
      a: "Yes! You can access your storage unit 24/7 using your unique access code. Our facilities are secured and monitored around the clock."
    },
    {
      q: "Do you offer climate-controlled storage units?",
      a: "Yes, we offer climate-controlled units to protect sensitive items such as electronics, artwork, or important documents from humidity and temperature changes."
    },
    {
      q: "How long can I rent a storage unit?",
      a: "You can rent a unit for as long as you need — whether it’s one week or several years. We offer both short- and long-term rental options."
    },
    {
      q: "Can I change to a different unit size later?",
      a: "Absolutely. If you need more or less space, you can easily switch to another available unit at any time, based on availability."
    },
    {
      q: "Is my property safe in your facility?",
      a: "Yes, all our facilities are equipped with 24-hour video surveillance, secure access systems, and regular security patrols to ensure your belongings are safe."
    },
  ];

  // Här skapas ett “state” för att hålla reda på vilka frågor som är öppna.
  // useState(new Set([0])) betyder:
  // - Startar med en ny “Set” (ungefär som en lista, men den kan bara innehålla unika värden).
  // -Använder Set istället för vanlig array, för att enkelt kunna lägga till/ta bort öppna frågor utan att skapa dubbletter.
  const [open, setOpen] = useState(new Set([0]));

  // Den här funktionen körs varje gång användaren klickar på en fråga.
  // “i” är indexet för den fråga som klickats på.
  // Skapar en kopia av nuvarande öppna frågor (prev = tidigare state).
  // Om frågan redan är öppen → ta bort den från Set (stäng den).
  // Om frågan inte är öppen → lägg till den i Set (öppna den).
  // Sedan returnerar vi “next”, och React uppdaterar gränssnittet.
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };


  // Här börjar själva strukturen (JSX) som ska visas på sidan.
  // JSX ser ut som HTML, men kan innehålla JavaScript (inom { }).
  return (
    <div className="FAQ-section">
      <div className="Container">

        {/* Accordion-content används som grid i CSS (vänster = rubriker, höger = frågor) */}
        <div className="Accordion-content">

          {/* Vänsterkolumn – rubrik och introduktionstext */}
          <h2 className="Accordion-title">FAQs</h2>
          <p className="Accordion-subtitle">Frequently Asked Questions</p>
          <p className="Accordion-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Här går vi igenom listan med frågor (items) med .map() */}
          {/* .map() betyder: “för varje fråga, skapa ett nytt element på sidan” */}
          {items.map((it, i) => {
            // isOpen är true om frågan finns i vår “open”-Set (dvs om den är öppen)
            const isOpen = open.has(i);

            // Vi returnerar JSX för en enda fråga
            return (
              // Varje fråga (Accordion-item) får en “key” för att React ska kunna hålla reda på dem.
              // Om frågan är öppen, lägg till klassen “is-open” → CSS visar svaret + gul bakgrund.
              <div key={i} className={`Accordion-item${isOpen ? " is-open" : ""}`}>

                {/* Knappen användaren klickar på */}
                <button
                  className="Accordion-question"
                  // aria-expanded är ett “tillgänglighetsattribut” (hjälper skärmläsare förstå om sektionen är öppen)
                  aria-expanded={isOpen}
                  // aria-controls kopplar knappen till det element som visar svaret
                  aria-controls={`acc-answer-${i}`}
                  // onClick kör toggle-funktionen när man klickar
                  onClick={() => toggle(i)}
                >
                  {/* Texten på frågan */}
                  {it.q}

                  {/* Font Awesome-ikon (pil nedåt) */}
                  {/* I React används className istället för class */}
                  {/* Vi lägger även till en extra klass acc-icon--open om frågan är öppen (roterar pilen) */}
                  <i
                    className={`fa-solid fa-chevron-down acc-icon${isOpen ? " acc-icon--open" : ""}`}
                    aria-hidden="true" // döljer ikonen för skärmläsare, eftersom den inte tillför mening
                  ></i>
                </button>

                {/* Detta är själva svaret – syns bara om parent har klassen “is-open” */}
                <div id={`acc-answer-${i}`} className="Accordion-answer">
                  <p>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Exporten behövs för att du ska kunna importera komponenten i din Contact-sida eller liknande.
export default Accordion;

