import css from "./OrderLink.module.css";
import { customScrollToElement } from "../../../auxiliary/scroll";

const handleClick = (event) => {
  event.preventDefault();
  const item = event.target.closest("a");
  if (!item) return;
  const targetId = item.getAttribute("href").substring(1);
  customScrollToElement(targetId);
};

const OrderLink = ({ children }) => {
  return (
    <a className={css.link} href="#id-footer" onClick={handleClick}>
      {children}
    </a>
  );
};

export default OrderLink;
