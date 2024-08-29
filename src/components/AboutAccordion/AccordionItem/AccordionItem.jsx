import { useRef } from "react";
import css from "./AccordionItem.module.css";
import AccordionButton from "../../UI/AccordionButton/AccordionButton";
import clsx from "clsx";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const panelRef = useRef(null);
  return (
    <li className={clsx(css.item, isOpen && css.active)}>
      <h3 className={clsx(css.header)} onClick={onClick}>
        {title}
        <AccordionButton iconId="icon-dropdown" isOpen={isOpen} />
      </h3>
      <div
        ref={panelRef}
        className={clsx(css.panel, isOpen && css.active)}
        style={{
          maxHeight: isOpen ? `${panelRef.current?.scrollHeight}px` : "0",
          opacity: isOpen ? "1" : "0",
          transition: "max-height 1s ease, opacity 0.5s ease",
        }}
      >
        <ul className={css.text}>
          {content.map((text, index) => (
            <li key={index} className={css.listItem}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default AccordionItem;
