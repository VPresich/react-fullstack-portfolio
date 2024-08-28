import clsx from "clsx";
import iconsPath from "../../../assets/img/icons/symbols.svg";
import css from "./NavigationBtn.module.css";

const NavigationBtn = ({
  iconId,
  ariaLabel,
  classNameBtn = "",
  classNameIcon = "",
}) => {
  return (
    <button className={clsx(css.btn, classNameBtn)}>
      <svg className={clsx(css.icon, classNameIcon)} aria-label={ariaLabel}>
        <use href={`${iconsPath}#${iconId}`}></use>
      </svg>
    </button>
  );
};

export default NavigationBtn;
