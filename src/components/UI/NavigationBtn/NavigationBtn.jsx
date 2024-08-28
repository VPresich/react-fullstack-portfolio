import clsx from "clsx";
import iconsPath from "../../../assets/img/icons/symbols.svg";
import css from "./NavigationBtn.module.css";

const NavigationBtn = ({
  iconId,
  ariaLabel,
  onClick = null,
  classNameBtn = "",
  classNameIcon = "",
}) => {
  return (
    <button
      className={clsx(css.btn, classNameBtn && { classNameBtn })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <svg
        className={clsx(css.icon, classNameIcon && { classNameIcon })}
        aria-label={ariaLabel}
      >
        <use href={`${iconsPath}#${iconId}`}></use>
      </svg>
    </button>
  );
};

export default NavigationBtn;
