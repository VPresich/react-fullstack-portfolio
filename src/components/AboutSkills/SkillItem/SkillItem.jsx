import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import css from "./SkillItem.module.css";

const SkillItem = ({ skill, isActive }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.item, css[theme], isActive && css.active)}>
      {skill}
    </div>
  );
};
export default SkillItem;
