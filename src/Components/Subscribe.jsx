import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (v) => (/^\S+@\S+\.\S+$/.test(v) ? "" : "Enter a valid email");

  const handleChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    // rensa/uppdatera fel live
    const msg = validate(v);
    setErrors((prev) => ({ ...prev, email: msg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validate(email);
    if (msg) {
      setErrors({ email: msg });
      return;
    }
    setErrors({});
    
    console.log("Subscribed:", { email });
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






