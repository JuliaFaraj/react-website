import React, { useState } from 'react';

const GetInTech = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    commentsQuestions: ''
  });

  const [errors, setErrors] = useState ({})
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));

    if (value.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, [name]: 'This field is required.' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (String(formData[field] || '').trim() === '') {
        newErrors[field] = 'This field is required.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    alert('Form submitted.');
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
                  <span className="error-message">{errors.name && errors.name}</span>
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
                </div>

                <div className="form-group">
                  <label htmlFor="telephone" className="form-label">Telephone</label>
                  <input
                    id="telephone"
                    type="tel"
                    name="telephone"             
                    className="form-input"
                    placeholder="Telephone"
                    value={formData.telephone}
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
                  <span className="error-message">{errors.subject && errors.subject}</span>

                </div>

                <div className="form-group">
                  <label htmlFor="commentsQuestions" className="form-label">Comments / Questions</label>
                  <textarea
                    id="commentsQuestions"
                    name="commentsQuestions"       
                    className="form-input"
                    placeholder="Comments/Questions"
                    required
                    value={formData.commentsQuestions}
                    onChange={handleChange}
                  />
                  <span className="error-message">{errors.commentsQuestions && errors.commentsQuestions}</span>

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
