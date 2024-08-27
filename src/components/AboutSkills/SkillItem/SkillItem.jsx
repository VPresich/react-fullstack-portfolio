import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import css from "./SkillItem.module.css";

const SkillItem = ({ skill, isActive }) => {
  const theme = useSelector(selectTheme);
  return (
    <li
      className={clsx(
        css.item,
        css[theme],
        isActive && css.active,
        "swiper-slide"
      )}
    >
      <span>{skill}</span>
    </li>
  );
};

export default SkillItem;
