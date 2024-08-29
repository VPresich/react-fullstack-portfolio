import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import css from "./Loader.module.css";

import { Triangle } from "react-loader-spinner";

const themeColors = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  orange: "var(--orange)",
  grey: "var(--grey)",
};

const Loader = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={css.container}>
      <Triangle
        visible={true}
        height="100"
        width="100"
        color={themeColors[theme] || "var(--button-text)"}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
