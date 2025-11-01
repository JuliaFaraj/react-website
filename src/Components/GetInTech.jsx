import React from 'react'

const GetInTech = () => {
  return (
   <div className="GetInTech-section">
  <div className="Container">
    <div className="GetInTech-content">

      <div className="GetInTech-left">
        <h2 className="GetInTech-title">Get In Tech</h2>
        <p className="GetInTech-subtitle">Get Personalized Assistance – Contact Us</p>
        <div className="GetInTech-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        </div>
        <div className="contact-media" aria-hidden="true">API?</div>
      </div>

{/* mina label hette först "for" men AI uppgre att React kräver att man använder "htmlFor" istället för "for" 
    för att kopplingen mellan label och input ska fungera korrekt.  */}

      <div className="GetInTech-right">
        <div className="GetInTech-form">
          <form id="regForm" className="regForm">
            <div className="form-group">
              <label htmlFor="yourName" className="form-label">Your Name</label>
              <input type="text" id="yourName" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" id="email" className="form-input" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telePhone" className="form-label">Telephone</label>
              <input type="number" id="telePhone" className="form-input" placeholder="Telephone" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" className="form-input" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="commentsQuestions" className="form-label">Comments / Questions</label>
              <input type="text" id="commentsQuestions" className="form-input" placeholder="Comments/Questions" required />
            </div>
          </form>
          <button className="btn--primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default GetInTech
