import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/selectors";
import DocumentTitle from "../../components/DocumentTitle";
import ContentImage from "../../components/ContentImage/ContentImage";
import AboutAccordion from "../../components/AboutAccordion/AboutAccordion";
import AboutSkills from "../../components/AboutSkills/AboutSkills";
import skillsTechData from "../../components/AboutSkills/tech-skills-data";
import css from "./AboutMePage.module.css";

const AboutMePage = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <DocumentTitle>AboutMe</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className="visually-hidden">About me</h2>
          <div className={css.infoWrapper}>
            <div className={css.textWrapper}>
              <p className={css.text}>
                I work with people all over the world to create impressive and{" "}
                <span className={css[theme]}> functional </span>
                <span className={css.textGrey}> websites </span> that reflect
                each client&#39;s unique personality.
              </p>
            </div>
            <div className={css.imageWrapper}>
              <ContentImage />
            </div>
          </div>
          <AboutAccordion />
          <AboutSkills skillsData={skillsTechData} />
        </div>
      </section>
    </>
  );
};
export default AboutMePage;
