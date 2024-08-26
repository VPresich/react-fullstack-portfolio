import { useEffect } from "react";
import HeaderMenuBtn from "../HeaderMenuBtn/HeaderMenuBtn";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import OrderLink from "../UI/OrderLink/OrderLink";
import ColorSelector from "../UI/ColorSelector/ColorSelector";

import Logo from "../Logo/Logo";

import { useRef } from "react";
import css from "./AppBar.module.css";

const AppBar = () => {
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current) {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        headerRef.current.classList.add(css.onscroll);
      } else {
        headerRef.current.classList.remove(css.onscroll);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={css.header} id="id-header">
      <div className={css.container}>
        <Logo />
        <div className={css.menuButtons}>
          <HeaderMenuBtn />
          <ColorSelector />
          <MobileMenuBtn />
        </div>
        <div className={css.orderLinkContainer}>
          <OrderLink>Order the project</OrderLink>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
