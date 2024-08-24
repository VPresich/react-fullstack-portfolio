import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./HeaderMenuBtn.module.css";

const HeaderMenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={css.navigation}>
      <button className={css.btn} onClick={toggleMenu}>
        Menu
      </button>
      <ul className={clsx(css.menu, isMenuOpen && css.isopen)}>
        <NavLink className={css.link} to="/aboutme" onClick={toggleMenu}>
          About me
        </NavLink>
        <NavLink className={css.link} to="/benefits" onClick={toggleMenu}>
          Benefits
        </NavLink>
        <NavLink className={css.link} to="/projects" onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink className={css.link} to="/faq" onClick={toggleMenu}>
          FAQ
        </NavLink>
        <NavLink className={css.link} to="/reviews" onClick={toggleMenu}>
          Reviews
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderMenuBtn;
