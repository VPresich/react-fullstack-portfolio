import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../redux/theme/selectors";
import Logo from "../Logo/Logo";
import CoversSection from "../CoverSection/CoverSection";
import { projectsUrl } from "../../data/projects-data";
import css from "./SplashScreen.module.css";

const SplashScreen = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.container}>
      <CoversSection projects={projectsUrl} />
      <div className={clsx(css.logoContainer, css[theme])}>
        <Logo />
      </div>
    </div>
  );
};

export default SplashScreen;
