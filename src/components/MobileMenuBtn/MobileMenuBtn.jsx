import clsx from "clsx";
import { useState } from "react";
import iconsPath from "../../assets/img/icons/symbols.svg";
import MobileMenuContent from "../MobileMenuContent/MobileMenuContent";
import css from "./MobileMenuBtn.module.css";

const MobileMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className={css.mobileMenuBtn} onClick={handleClick}>
        <svg className={css.menuBtnIcon} aria-label="Burger button icon">
          <use href={`${iconsPath}#icon-menu`} />
        </svg>
      </button>
      <div className={clsx(css.mobileMenu, isOpen && css.isopen)}>
        <button className={css.closeBtn} onClick={handleClick}>
          <svg className={css.closeBtnIcon} aria-label="close menu button">
            <use href={`${iconsPath}#icon-x`} />
          </svg>
        </button>
        <MobileMenuContent onMenuClick={handleClick} />
      </div>
    </>
  );
};

export default MobileMenuBtn;
