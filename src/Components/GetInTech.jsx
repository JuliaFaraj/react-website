import { useState } from 'react'; // Validering av formulär med hjälp av state och enkla kontroller. Inspirerad av Hans video om formulärhantering i React.
// Efter att ha följt Hans video blev min kod ganska rörig då min validering låg efter POST till API. Jag skickade min kod till AI och bad den lägga allt i rätt ordning för bättre struktur.

const GetInTech = () => {

  const [formData, setFormData] = useState({ // Sparar det som skrivs in i varje fält
    name: '',
    email: '',
    phonenumber: '',
    subject: '',
    comment: ''
  });

  const [errors, setErrors] = useState({}); // Sparar felmeddelanden (t.ex. om fältet är tomt)

  const handleChange = (e) => { // Körs varje gång användaren skriver något i ett fält
    const { name, value } = e.target; // Hämtar fältnamn och värde
    setFormData((f) => ({ ...f, [name]: value })); // Uppdaterar det specifika fältets värde

    // Validering – enkel kontroll: tomt fält?
    if (value.trim() === '') { setErrors(prev => ({ ...prev, [name]: 'Detta fält måste fyllas i.' })); } // Spara fel
    else { setErrors(prev => ({ ...prev, [name]: '' })); } // Ta bort fel om det finns text
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Körs när man klickar på "Skicka" – stoppar sid-reload

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
      method: 'post', // POST
      headers: { 'Content-Type': 'application/json' }, // JSON-header
      body: JSON.stringify(formData) // Skickar formData
    });

    if (res.ok) { const data = await res.text(); console.log(data); } // Lyckat svar (text)
    else { const data = await res.json(); console.log(data); } // Misslyckat svar (json)

    const newErrors = {}; // Skapar ett nytt objekt för fel
    Object.keys(formData).forEach((field) => { // Går igenom alla fält
      if (String(formData[field]).trim() === '') { newErrors[field] = 'Detta fält måste fyllas i.'; } // Lägg till fel om tomt
    });

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; } // Visa fel och avbryt
    setErrors({}); // Rensa fel om allt korrekt
  };

  return (
    <div className="GetInTech-section theme-light">
      <div className="container">
        <div className="GetInTech-content">

          <div className="GetInTech-left">
            <h2 className="GetInTech-title">Get In Tech</h2>
            <p className="GetInTech-subtitle">Get Personalized Assistance – Contact Us</p>
            <div className="GetInTech-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </div>
            <div className="contact-media" aria-hidden="true">API?</div>
          </div>

          <div className="GetInTech-right">
            <div className="GetInTech-form">
              <form className="regForm" noValidate onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className="error-message">{errors.name && errors.name}</span> {/* Felmeddelande för name */}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="error-message">{errors.name && errors.name}</span> {/* Visar fel (nu samma nyckel som i din kod) */}
                </div>

                <div className="form-group">
                  <label htmlFor="phonenumber" className="form-label">Phonenumber</label>
                  <input
                    id="phonenumber"
                    type="number"
                    name="phonenumber"
                    className="form-input"
                    placeholder="Telephone"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <span className="error-message">{errors.subject && errors.subject}</span> {/* Fel för subject */}
                </div>

                <div className="form-group">
                  <label htmlFor="comment" className="form-label">Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-input"
                    placeholder="Comments"
                    required
                    value={formData.comment}
                    onChange={handleChange}
                  />
                  <span className="error-message">{errors.commentsQuestions && errors.commentsQuestions}</span> {/* Som i din kod */}
                </div>

                <button type="submit" className="btn--primary">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetInTech;
