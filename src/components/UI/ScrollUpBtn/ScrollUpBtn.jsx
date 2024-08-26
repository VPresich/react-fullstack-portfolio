import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import css from "./ScrollUpBtn.module.css";
import { scrollUp } from "../../../auxiliary/scroll";

const handleClick = (event) => {
  event.preventDefault();
  scrollUp();
};

const ScrollUpBtn = () => {
  const theme = useSelector(selectTheme);
  return (
    <button
      className={clsx(css.btn, css[theme])}
      type="button"
      onClick={handleClick}
    >
      Scroll up
    </button>
  );
};

export default ScrollUpBtn;
