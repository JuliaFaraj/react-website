import { useState, useEffect } from 'react'
import Testimonials from './Testimonials'
import BgImg from '../assets/Images/BgImg.svg';

const ClientTestimonial = () => {
    const [testimonials, setTestimonials]= useState ([])

    const getTestimonials = async () => {
        try {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
            const data = await res.json()
            setTestimonials(data)
        } catch (err) {
            console.error('Failed to fetch testimonials', err) 
        }
    }

    useEffect (() =>{
        getTestimonials()
    }, [] )

  return (
  <div className="testimonials" style={{ backgroundImage: `url(${BgImg})` }}>
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

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <Testimonials key={testimonial.id} item={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientTestimonial
