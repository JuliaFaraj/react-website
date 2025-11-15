import { useState } from 'react';
// Validreing baserad på lärares video men finslipad med hjälp av AI.

const GetInTech = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    subject: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const nameRegex = /^[\p{L}\s-]{2,}$/u;
  const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u;

 
  const validateField = (name, value) => {
    const trimmed = String(value).trim();
    let error = '';

    
    if (['name', 'email', 'subject', 'comment'].includes(name) && !trimmed) {
      error = 'Detta fält måste fyllas i.';
    } else if (name === 'name' && trimmed && !nameRegex.test(trimmed)) {
      error = 'Must be at least 2 characters long, no numbers.';
    } else if (name === 'email' && trimmed && !emailRegex.test(trimmed)) {
      error = 'Must be a valid email (eg. username@domain.com).';
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === '';
  };

  const validateForm = () => {
    const newErrors = {};

    ['name', 'email', 'subject', 'comment'].forEach((field) => {
      const value = String(formData[field]).trim();
      if (!value) {
        newErrors[field] = 'Detta fält måste fyllas i.';
      }
    });

    if (formData.name.trim() && !nameRegex.test(formData.name.trim())) {
      newErrors.name = 'Must be at least 2 characters long, no numbers.';
    }

    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Must be a valid email (eg. username@domain.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('form invalid');
      return;
    }

    console.log('form valid');

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.text();
      console.log(data);
    } else {
      const data = await res.json();
      console.log(data);
    }
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
                  <span className="error-message">
                    {errors.name && errors.name}
                  </span>
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
                  <span className="error-message">
                    {errors.email && errors.email}
                  </span>
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
                  <span className="error-message">
                    {errors.phonenumber && errors.phonenumber}
                  </span>
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
                  <span className="error-message">
                    {errors.subject && errors.subject}
                  </span>
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
                  <span className="error-message">
                    {errors.comment && errors.comment}
                  </span>
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
