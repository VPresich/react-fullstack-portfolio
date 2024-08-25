import { removeSpaces } from "../../../auxiliary/removesSpaces";
import css from "./PhoneLink.module.css";

const PhoneLink = ({ children = "+380 11 1111 11 11" }) => {
  return (
    <div className={css.address}>
      <a href={`tel:${removeSpaces(children)}`} className={css.link}>
        {children}
      </a>
    </div>
  );
};

export default PhoneLink;
