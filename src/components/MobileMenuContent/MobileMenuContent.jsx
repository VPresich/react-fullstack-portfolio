import { NavLink } from "react-router-dom";
import OrderLink from "../UI/OrderLink/OrderLink";
import css from "./MobileMenuContent.module.css";

const MobileMenuContent = ({ onMenuClick }) => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink className={css.item} to="/aboutme" onClick={onMenuClick}>
          About me
        </NavLink>
        <NavLink className={css.item} to="/benefits" onClick={onMenuClick}>
          Benefits
        </NavLink>
        <NavLink className={css.item} to="/projects" onClick={onMenuClick}>
          Projects
        </NavLink>
        <NavLink className={css.item} to="/faq" onClick={onMenuClick}>
          FAQ
        </NavLink>
        <NavLink className={css.item} to="/reviews" onClick={onMenuClick}>
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
