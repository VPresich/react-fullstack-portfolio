import css from "./OrderLink.module.css";

const OrderLink = ({ children }) => {
  return (
    <a className={css.link} href="#">
      {children}
    </a>
  );
};

export default OrderLink;
