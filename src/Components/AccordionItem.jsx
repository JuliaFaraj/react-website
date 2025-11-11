import { useState } from "react";



const AccordionItem = ({ item = { title: '', description: '' }, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleAccordion = () => setIsOpen(v => !v);

  return (
    <div className="accordion-item">
      <div
        className={`item-titlebar ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}>

        <h3>{item.title}</h3>
        <div className="btn btn-accordion">
          <i className={`item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
      </div>

      {isOpen && (
        <p className={`item-content ${isOpen ? 'active' : ''}`}>
          {item.description}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;

