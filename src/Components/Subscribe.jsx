import { useState } from "react";

//Valideringen är skapad utifrån lärares vidoe om formulärhantering i React + AI-hjälp för e-postvalidering.

const Subscribe = () => { 
  // Komponent för nyhetsbrevs-prenumeration

  const [email, setEmail] = useState(""); 
  // Sparar det som skrivs i e-postfältet

  const [errors, setErrors] = useState({}); 
  // Sparar felmeddelanden (t.ex. om e-posten är ogiltig)

  const validate = (v) => 
    /^\S+@\S+\.\S+$/.test(v) ? "" : "Skriv en giltig e-postadress";
  // Kollar om e-posten är i rätt format (ex: test@mail.com). Framtagen med hjälp av AI.

  const handleChange = (e) => { 
    // Körs varje gång man skriver i inputfältet
    const v = e.target.value; // Hämtar värdet från input
    setEmail(v); // Uppdaterar e-posten i state
    const msg = validate(v); // Kollar om e-posten är giltig
    setErrors((prev) => ({ ...prev, email: msg })); 
    // Sparar felmeddelande om det finns något
  };

  const handleSubmit = (e) => { 
    // Körs när man trycker på "Skicka"
    e.preventDefault(); 
    // Stoppar sidan från att laddas om
    const msg = validate(email); 
    // Kollar e-posten igen vid inskick
    if (msg) { 
      // Om det finns felmeddelande
      setErrors({ email: msg }); 
      // Visa felet
      return; 
      // Avbryt skickandet
    }
    setErrors({}); 
    // Rensar tidigare fel om allt är okej

    console.log("Prenumererad:", { email }); 
    // Skriver ut e-posten i konsolen (tillfälligt test)
  };


  

   return (
    <section className="newsletter theme-light">
      <div className="container">
        <div className="newsletter-content">
          <div className="nl-left">
            <div className="nl-title">Subscribe Our Newsletter</div>
            <div className="nl-subtitle">
              Subscribe to our newsletter to receive early discount offers, updates and information.
            </div>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              id="nl-email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              required
              value={email} 
              onChange={handleChange}
              className={`nl-input form-input ${errors.email ? "is-invalid" : ""}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "nl-email-error" : undefined}
            />
            {errors.email && (
              <small id="nl-email-error" className="field-error">{errors.email}</small>
            )}

            <button type="submit" className="btn--primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;






