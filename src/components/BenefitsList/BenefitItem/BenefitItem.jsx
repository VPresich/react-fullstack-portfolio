import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import iconsPath from "../../../assets/img/icons/symbols.svg";
import css from "./BenefitItem.module.css";

const BenefitItem = ({ iconId, title, description }) => {
  const theme = useSelector(selectTheme);
  return (
    <li className={css.item}>
      <span className={clsx(css.iconWrap, css[theme])}>
        <svg className={css.icon} width="24" height="24">
          <use href={`${iconsPath}#${iconId}`}></use>
        </svg>
      </span>
      <div className="css.infoWrapper">
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  );
};

export default BenefitItem;
