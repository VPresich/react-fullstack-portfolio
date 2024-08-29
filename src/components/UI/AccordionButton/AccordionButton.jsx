import PropTypes from "prop-types";
import iconsPath from "../../../assets/img/icons/symbols.svg";
import clsx from "clsx";
import css from "./AccordionButton.module.css";

const AccordionButton = ({ iconId, isOpen, onClick }) => (
  <button
    type="button"
    className={clsx(css.button, isOpen && css.active)}
    onClick={onClick}
    aria-label={isOpen ? "Collapse" : "Expand"}
  >
    <svg className={clsx(css.icon, isOpen && css.active)} aria-hidden="true">
      <use href={`${iconsPath}#${iconId}`} />
    </svg>
  </button>
);

AccordionButton.propTypes = {
  iconId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default AccordionButton;
