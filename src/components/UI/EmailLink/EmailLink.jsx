import clsx from "clsx";
import css from "./EmailLink.module.css";

const EmailLink = ({ children }) => {
  return (
    <address className={css.address}>
      <a href="mailto:lloydjefferson@gmail.com" className={clsx(css.link)}>
        {children}
      </a>
    </address>
  );
};

export default EmailLink;
