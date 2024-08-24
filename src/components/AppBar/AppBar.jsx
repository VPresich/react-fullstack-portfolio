import HeaderMenuBtn from "../HeaderMenuBtn/HeaderMenuBtn";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import OrderLink from "../UI/OrderLink/OrderLink";
import Logo from "../Logo/Logo";

import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.menuButtons}>
        <HeaderMenuBtn />
        <MobileMenuBtn />
      </div>
      <div className={css.orderLinkContainer}>
        <OrderLink>Order the project</OrderLink>
      </div>
    </header>
  );
};

export default AppBar;
