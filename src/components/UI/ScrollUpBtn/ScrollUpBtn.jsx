import css from "./ScrollUpBtn.module.css";
import { customScrollToElement } from "../../../auxiliary/scroll";

const handleClick = (event) => {
  event.preventDefault();
  customScrollToElement("id-header");
};

const ScrollUpBtn = () => {
  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Scroll up
    </button>
  );
};

export default ScrollUpBtn;
