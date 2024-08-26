import css from "./AccordionItem.module.css";
import pathIcons from "../../../assets/img/icons/symbols.svg";
import clsx from "clsx";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <li className={clsx(css.item, isOpen && css.active)}>
      <h3 className={clsx(css.header)} onClick={onClick}>
        {title}
        <button className={clsx(css.button, isOpen && css.active)}>
          <svg
            className={clsx(css.icon, isOpen && css.active)}
            aria-label="Arrow icon"
          >
            <use href={`${pathIcons}#icon-dropdown`}></use>
          </svg>
        </button>
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
