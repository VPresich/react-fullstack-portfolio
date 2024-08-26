import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../../redux/theme/selectors";
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
  const theme = useSelector(selectTheme);
  return (
    <a
      className={clsx(css.link, css[theme])}
      href="#id-footer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default OrderLink;
