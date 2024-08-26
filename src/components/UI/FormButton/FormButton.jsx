import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import css from "./FormButton.module.css";

const FormButton = ({ children, handleClick, ...props }) => {
  const theme = useSelector(selectTheme);
  return (
    <button
      className={clsx(css.btn, css[theme])}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default FormButton;
