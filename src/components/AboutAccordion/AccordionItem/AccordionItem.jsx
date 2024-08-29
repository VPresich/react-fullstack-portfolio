import css from "./AccordionItem.module.css";
import AccordionButton from "../../UI/AccordionButton/AccordionButton";
import clsx from "clsx";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <li className={clsx(css.item, isOpen && css.active)}>
      <h3 className={clsx(css.header)} onClick={onClick}>
        {title}
        <AccordionButton iconId="icon-dropdown" isOpen={isOpen} />
      </h3>
      <div className={clsx(css.panel, isOpen && css.active)}>
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
