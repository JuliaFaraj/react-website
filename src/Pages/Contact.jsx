
import React from 'react'
import ContactUsHero from '../Components/ContactUs.jsx'
import GetInTech from '../Components/GetInTech.jsx'
import Accordion from '../Components/Accordion.jsx'
import FindUsOn from '../Components/FindUsOn.jsx'
import Subscribe from '../Components/Subscribe.jsx'
import AccordionItem from '../Components/AccordionItem.jsx'



const Contact = () => {
  return (
    <>
        <ContactUsHero />
          <GetInTech />
          <FindUsOn />
        <Accordion />
         
          <AccordionItem />
              <Subscribe />

        </>
  )
}

export default Contact
