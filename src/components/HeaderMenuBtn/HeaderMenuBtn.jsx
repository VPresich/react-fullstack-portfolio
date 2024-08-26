import { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/selectors";
import { NavLink } from "react-router-dom";
import css from "./HeaderMenuBtn.module.css";

const HeaderMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useSelector(selectTheme);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={css.navigation}>
      <button className={clsx(css.btn, css[theme])} onClick={toggleMenu}>
        Menu
      </button>
      <ul className={clsx(css.menu, isMenuOpen && css.isopen)}>
        <NavLink
          className={clsx(css.link, css[theme])}
          to="/aboutme"
          onClick={toggleMenu}
        >
          About me
        </NavLink>
        <NavLink
          className={clsx(css.link, css[theme])}
          to="/benefits"
          onClick={toggleMenu}
        >
          Benefits
        </NavLink>
        <NavLink
          className={clsx(css.link, css[theme])}
          to="/projects"
          onClick={toggleMenu}
        >
          Projects
        </NavLink>
        <NavLink
          className={clsx(css.link, css[theme])}
          to="/faq"
          onClick={toggleMenu}
        >
          FAQ
        </NavLink>
        <NavLink
          className={clsx(css.link, css[theme])}
          to="/reviews"
          onClick={toggleMenu}
        >
          Reviews
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderMenuBtn;
