import { useState } from "react";
import clsx from "clsx";
import css from "./FaqAccordion.module.css";
import AccordionButton from "../UI/AccordionButton/AccordionButton";

const FaqAccordion = ({ faqListData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={css.container}>
      {faqListData.map(({ question, answer }, index) => (
        <li key={index} className={css.item}>
          <div className={css.header}>
            <h3 onClick={() => toggleItem(index)}>{question}</h3>
            <AccordionButton
              iconId="icon-dropdown"
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          </div>

          <div className={clsx(css.panel, openIndex === index && css.active)}>
            <p className={css.text}>{answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FaqAccordion;
