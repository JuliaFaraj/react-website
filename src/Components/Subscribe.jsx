import React from 'react'

const Subscribe = () => {
  return (
    <section className="newsletter theme-light">
      <div className="container">
        <div className="newsletter-content">
          <div class="newsletter-left">
            <div class="nl-title">Subscribe Our Newsletter</div>
            <div class="nl-subtitle">Subscribe to our newsletter to receive early discount offers, updates and info.</div>
          </div>
 {/* AI förklarade att man skriver ut attribut för att beskriva exakt hur ett element ska fungera och bete sig.
 Varje attribut tillför en bit information till webbläsaren (och till React).*/}

          <form className="newsletter-form" action="#" method="post" noValidate>
            <input
                id="nl-email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                required
                className="nl-input"
                />
  <button type="submit" className="btn--primary">Submit</button>
</form>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
