import clsx from "clsx";
import css from "./EmailLink.module.css";

const EmailLink = ({ children = "lloydjefferson@gmail.com" }) => {
  return (
    <div className={css.address}>
      <a href={`mailto:${children}`} className={clsx(css.link)}>
        {children}
      </a>
    </div>
  );
};

export default EmailLink;
