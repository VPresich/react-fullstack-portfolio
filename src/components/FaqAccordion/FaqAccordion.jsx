import { useState, useRef } from "react";
import clsx from "clsx";
import css from "./FaqAccordion.module.css";
import AccordionButton from "../UI/AccordionButton/AccordionButton";

const FaqAccordion = ({ faqListData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={css.container}>
      {faqListData.map(({ question, answer }, index) => (
        <li key={index} className={css.item}>
          <h3 className={css.header} onClick={() => toggleItem(index)}>
            {question}
            <AccordionButton
              iconId="icon-dropdown"
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          </h3>

          <div
            ref={(el) => (refs.current[index] = el)}
            className={clsx(css.panel, openIndex === index && css.active)}
            style={{
              maxHeight:
                openIndex === index
                  ? `${refs.current[index]?.scrollHeight}px`
                  : "0",
              opacity: openIndex === index ? "1" : "0",
              transition: "max-height 1s ease, opacity 0.5s ease",
            }}
          >
            <p className={css.text}>{answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FaqAccordion;
