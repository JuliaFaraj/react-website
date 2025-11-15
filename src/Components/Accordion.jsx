import { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [accordions, setAccordions] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs");
    const data = await res.json();

    console.log("FAQ raw:", data);
// fick problem med en extra kanpp som AI hjälpte mig ta bort 
    const cleaned = (Array.isArray(data) ? data : []).filter(
      (item) =>
        item &&
        typeof item.title === "string" &&
        item.title.trim() !== "" &&
        typeof item.description === "string" &&
        item.description.trim() !== ""
    );

    console.log("FAQ cleaned:", cleaned);
    setAccordions(cleaned);
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <div className="FAQ-section">
      <div className="Container">
        <div className="Accordion-content">
          <h2 className="Accordion-title">FAQs</h2>
          <p className="Accordion-subtitle">Frequently Asked Questions</p>
          <p className="Accordion-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {accordions.map((item, i) => (
            <AccordionItem
              key={item.id ?? i}
              item={item}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
