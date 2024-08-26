import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../../../redux/theme/slice";
import { selectTheme } from "../../../redux/theme/selectors";
import iconsPath from "../../../assets/img/icons/symbols.svg";
import clsx from "clsx";
import css from "./ColorSelector.module.css";

const themes = ["red", "blue", "green", "orange", "grey"];

const ColorSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value.toLowerCase();
    dispatch(updateTheme(selectedTheme));
    setIsOpen(false);
  };

  return (
    <div className={css.headerContainer}>
      <button
        className={clsx(css.btn, { [css.open]: isOpen }, css[theme])}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className={clsx(css.icon, css[theme])} aria-label="arrow icon">
          <use href={`${iconsPath}#icon-dropdown`} />
        </svg>
      </button>
      {isOpen && (
        <div className={clsx(css.dropdown, css[theme])}>
          {themes.map((themeOption) => (
            <label
              key={themeOption}
              className={clsx(css.label, css[themeOption])}
            >
              <input
                type="radio"
                value={themeOption}
                checked={theme === themeOption}
                onChange={handleThemeChange}
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorSelector;
