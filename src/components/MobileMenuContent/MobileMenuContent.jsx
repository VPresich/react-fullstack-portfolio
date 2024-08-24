import { NavLink } from "react-router-dom";
import OrderLink from "../UI/OrderLink/OrderLink";
import css from "./MobileMenuContent.module.css";

const MobileMenuContent = ({ onMenuClick }) => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink className={css.item} to="/" onClick={onMenuClick}>
          About me
        </NavLink>
        <NavLink className={css.item} to="/" onClick={onMenuClick}>
          Benefits
        </NavLink>
        <NavLink className={css.item} to="/" onClick={onMenuClick}>
          Projects
        </NavLink>
        <NavLink className={css.item} to="/" onClick={onMenuClick}>
          FAQ
        </NavLink>
        <NavLink className={css.item} to="/" onClick={onMenuClick}>
          Reviews
        </NavLink>
      </nav>
      <div className={css.orderLinkContainer}>
        <OrderLink>Order the project</OrderLink>
      </div>
    </div>
  );
};

export default MobileMenuContent;
