import { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import items from "./items-data";
import css from "./AboutAccordion.module.css";

const AboutAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={css.container}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </ul>
  );
};

export default AboutAccordion;
