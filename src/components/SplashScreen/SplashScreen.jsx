import Logo from "../Logo/Logo";
import CoversSection from "../CoverSection/CoverSection";
import { projectsUrl } from "../../data/projects-data";
import css from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={css.container}>
      <CoversSection projects={projectsUrl} />
      {/* <Logo /> */}
    </div>
  );
};

export default SplashScreen;
